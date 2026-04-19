import { navigate } from '../main.js';
import { cards, LEADING_CHAR_CATEGORIES, CONFUSING_GROUPS, splitShimoKana } from '../data/cards.js';
import { incrementWrongCount, loadWrongCounts, loadSettings } from '../storage.js';

export function render(app, params = {}) {
  const mode = params.mode || 'normal';
  const targetCards = params.deckIds
    ? cards.filter(c => params.deckIds.includes(c.id))
    : selectTargetCards(mode);

  if (targetCards.length === 0) {
    const msg = mode === 'weakness'
      ? 'まだ記録がありません'
      : '設定から表示する札にチェックを入れてください';
    app.innerHTML = `
      <div class="screen game-empty">
        <h2>札めくり</h2>
        <p class="empty-msg">${msg}</p>
        <button data-action="home">スタート画面へ戻る</button>
      </div>
    `;
    app.querySelector('[data-action="home"]').addEventListener('click', () => navigate('start'));
    return;
  }

  const deck = shuffle(targetCards);
  const orientations = deck.map(() => (Math.random() < 0.5 ? 0 : 180));

  const state = {
    deck,
    orientations,
    currentIndex: 0,
    prevKimariji: '',
    startTime: null,
  };

  app.innerHTML = `
    <div class="screen game-screen">
      <div class="game-header">
        <div class="prev-kimariji"></div>
        <div class="progress"></div>
      </div>
      <div class="card-area">
        <div class="card">
          <div class="shimo-no-ku"></div>
        </div>
        <div class="swipe-hint">タップしてめくる</div>
      </div>
      <div class="game-footer">
        <button class="footer-btn" data-action="prev">一つ前に戻る</button>
        <button class="footer-btn" data-action="home">スタート画面へ</button>
      </div>
    </div>
  `;

  const cardEl = app.querySelector('.card');
  const shimoEl = app.querySelector('.shimo-no-ku');
  const prevKimEl = app.querySelector('.prev-kimariji');
  const progressEl = app.querySelector('.progress');

  function renderCard() {
    const card = state.deck[state.currentIndex];
    const orientation = state.orientations[state.currentIndex];
    cardEl.style.transform = `rotate(${orientation}deg)`;
    const lines = splitShimoKana(card.id);
    shimoEl.innerHTML = lines.map(l => `<div class="shimo-line">${l}</div>`).join('');
    prevKimEl.textContent = state.prevKimariji;
    progressEl.textContent = `${state.currentIndex + 1} / ${state.deck.length}`;
  }

  function onAdvance() {
    if (state.startTime === null) state.startTime = Date.now();
    const currentCard = state.deck[state.currentIndex];
    state.prevKimariji = currentCard.kimariji;

    if (state.currentIndex === state.deck.length - 1) {
      const elapsed = Date.now() - state.startTime;
      navigate('result', {
        time: formatTime(elapsed),
        deckIds: state.deck.map(c => c.id),
        lastKimariji: currentCard.kimariji,
      });
      return;
    }

    state.currentIndex++;
    renderCard();
  }

  function onPrev() {
    if (state.currentIndex === 0) return;
    state.currentIndex--;
    state.prevKimariji = state.currentIndex > 0
      ? state.deck[state.currentIndex - 1].kimariji
      : '';
    const displayedCard = state.deck[state.currentIndex];
    incrementWrongCount(displayedCard.id);
    renderCard();
  }

  cardEl.addEventListener('click', onAdvance);

  app.querySelector('[data-action="prev"]').addEventListener('click', onPrev);
  app.querySelector('[data-action="home"]').addEventListener('click', () => navigate('start'));

  renderCard();
}

function selectTargetCards(mode) {
  if (mode === 'weakness') {
    const counts = loadWrongCounts();
    const entries = Object.entries(counts).map(([id, c]) => ({ id: Number(id), count: c }));
    if (entries.length === 0) return [];
    entries.sort((a, b) => b.count - a.count);
    const top10Threshold = entries[Math.min(9, entries.length - 1)].count;
    const targetIds = entries.filter(e => e.count >= top10Threshold).map(e => e.id);
    return cards.filter(c => targetIds.includes(c.id));
  }

  const settings = loadSettings();
  if (!settings || settings.all) return [...cards];

  const idSet = new Set();
  LEADING_CHAR_CATEGORIES.forEach(cat => {
    if (settings.categories[cat.key]) {
      cards.forEach(c => {
        if (cat.chars.includes(c.leadingChar)) idSet.add(c.id);
      });
    }
  });
  CONFUSING_GROUPS.forEach(g => {
    if (settings.categories[g.key]) {
      g.cardIds.forEach(id => idSet.add(id));
    }
  });
  return cards.filter(c => idSet.has(c.id));
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(ms) {
  const totalSec = ms / 1000;
  const m = Math.floor(totalSec / 60);
  const s = totalSec - m * 60;
  return `${String(m).padStart(2, '0')}:${s.toFixed(2).padStart(5, '0')}`;
}

