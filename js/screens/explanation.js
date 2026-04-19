import { navigate } from '../main.js';
import { cards } from '../data/cards.js';

export function render(app, params = {}) {
  if (params.cardId) {
    renderDetail(app, Number(params.cardId));
  } else {
    renderList(app);
  }
}

function renderList(app) {
  app.innerHTML = `
    <div class="screen explanation-screen">
      <h2>解説</h2>
      <ul class="card-list">
        ${cards.map(c => `
          <li class="card-list-item" data-id="${c.id}">
            <span class="card-num">${c.id}</span>
            <span class="card-preview">
              <span class="preview-kami">${c.kamiNoKu}</span>
              <span class="preview-author">${c.author}</span>
            </span>
          </li>
        `).join('')}
      </ul>
      <button data-action="back">スタート画面へ戻る</button>
    </div>
  `;

  app.querySelectorAll('.card-list-item').forEach(li => {
    li.addEventListener('click', () => {
      navigate('explanation', { cardId: li.dataset.id });
    });
  });

  app.querySelector('[data-action="back"]').addEventListener('click', () => navigate('start'));
}

function renderDetail(app, cardId) {
  const card = cards.find(c => c.id === cardId);
  if (!card) {
    navigate('explanation');
    return;
  }

  app.innerHTML = `
    <div class="screen card-detail">
      <div class="detail-header">
        <button class="back-btn" data-action="list">← 一覧</button>
        <span class="detail-num">第 ${card.id} 番</span>
      </div>

      <div class="detail-body">
        <div class="detail-row">
          <div class="detail-label">上の句</div>
          <div class="detail-value">${card.kamiNoKu}</div>
        </div>
        <div class="detail-row">
          <div class="detail-label">下の句</div>
          <div class="detail-value">${card.shimoNoKu}</div>
        </div>
        <div class="detail-row">
          <div class="detail-label">作者</div>
          <div class="detail-value">${card.author}</div>
        </div>
        <div class="detail-row">
          <div class="detail-label">決まり字</div>
          <div class="detail-value kimariji-value">${card.kimariji}</div>
        </div>
        <div class="detail-row">
          <div class="detail-label">現代語訳</div>
          <div class="detail-value">${card.translation}</div>
        </div>
        <div class="detail-row">
          <div class="detail-label">解説</div>
          <div class="detail-value">${card.explanation}</div>
        </div>
      </div>

      <button data-action="home">スタート画面へ</button>
    </div>
  `;

  app.querySelector('[data-action="list"]').addEventListener('click', () => navigate('explanation'));
  app.querySelector('[data-action="home"]').addEventListener('click', () => navigate('start'));
}
