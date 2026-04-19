import { navigate } from '../main.js';

export function render(app) {
  app.innerHTML = `
    <div class="screen start-screen">
      <h1>百人一首<br>決まり字練習</h1>
      <button data-action="start">スタート</button>
      <button data-action="weakness">苦手対策</button>
      <button data-action="settings">設定</button>
      <button data-action="explanation">解説</button>
    </div>
  `;
  app.querySelector('[data-action="start"]').addEventListener('click', () => navigate('game', { mode: 'normal' }));
  app.querySelector('[data-action="weakness"]').addEventListener('click', () => navigate('game', { mode: 'weakness' }));
  app.querySelector('[data-action="settings"]').addEventListener('click', () => navigate('settings'));
  app.querySelector('[data-action="explanation"]').addEventListener('click', () => navigate('explanation'));
}
