import { navigate } from '../main.js';
import { LEADING_CHAR_CATEGORIES, CONFUSING_GROUPS } from '../data/cards.js';
import { loadSettings, saveSettings } from '../storage.js';

const ALL_KEY = '__all__';

function getDefaultSettings() {
  const categories = {};
  LEADING_CHAR_CATEGORIES.forEach(c => { categories[c.key] = false; });
  CONFUSING_GROUPS.forEach(c => { categories[c.key] = false; });
  return { all: true, categories };
}

export function render(app) {
  const current = loadSettings() || getDefaultSettings();

  app.innerHTML = `
    <div class="screen settings-screen">
      <h2>設定</h2>
      <div class="settings-section">
        <label class="cat-item cat-all">
          <input type="checkbox" data-key="${ALL_KEY}" ${current.all ? 'checked' : ''}>
          <span>全て表示</span>
        </label>
      </div>

      <div class="settings-section">
        <h3>先頭の文字別</h3>
        ${LEADING_CHAR_CATEGORIES.map(c => `
          <label class="cat-item">
            <input type="checkbox" data-key="${c.key}" data-group="leading" ${current.categories[c.key] ? 'checked' : ''}>
            <span>${c.label}（${c.count}首）</span>
          </label>
        `).join('')}
      </div>

      <div class="settings-section">
        <h3>間違えやすい札</h3>
        ${CONFUSING_GROUPS.map(c => `
          <label class="cat-item">
            <input type="checkbox" data-key="${c.key}" data-group="confusing" ${current.categories[c.key] ? 'checked' : ''}>
            <span>${c.label}</span>
          </label>
        `).join('')}
      </div>

      <button data-action="back">スタート画面へ戻る</button>
    </div>
  `;

  const allCheckbox = app.querySelector(`[data-key="${ALL_KEY}"]`);
  const catCheckboxes = app.querySelectorAll('[data-group]');

  function syncAllState() {
    const allChecked = Array.from(catCheckboxes).every(cb => cb.checked);
    allCheckbox.checked = allChecked;
  }

  function persist() {
    const categories = {};
    catCheckboxes.forEach(cb => { categories[cb.dataset.key] = cb.checked; });
    saveSettings({ all: allCheckbox.checked, categories });
  }

  allCheckbox.addEventListener('change', () => {
    catCheckboxes.forEach(cb => { cb.checked = allCheckbox.checked; });
    persist();
  });

  catCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      syncAllState();
      persist();
    });
  });

  // 初期状態を反映（current.all が true の場合、全カテゴリーON扱い）
  if (current.all && !Object.values(current.categories).some(v => v)) {
    catCheckboxes.forEach(cb => { cb.checked = true; });
    persist();
  }

  app.querySelector('[data-action="back"]').addEventListener('click', () => navigate('start'));
}
