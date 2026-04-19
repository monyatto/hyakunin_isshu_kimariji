import { navigate } from '../main.js';

export function render(app, params = {}) {
  const time = params.time ?? '00:00.00';
  const deckIds = params.deckIds;
  const lastKimariji = params.lastKimariji;
  app.innerHTML = `
    <div class="screen result-screen">
      <h2>タイム</h2>
      <p style="text-align:center; font-size: 36px; margin: 32px 0 16px; color:#8b3a3a;">${time}</p>
      ${lastKimariji ? `
        <p style="text-align:center; font-size: 14px; color:#7a5a3a; margin-bottom: 8px;">最後の札</p>
        <p style="text-align:center; font-size: 28px; font-weight: bold; color:#8b3a3a; letter-spacing: 0.15em; margin-bottom: 32px;">${lastKimariji}</p>
      ` : ''}
      ${deckIds ? '<button data-action="retry">同じ札でもう一度</button>' : ''}
      <button data-action="back">スタート画面に戻る</button>
    </div>
  `;
  if (deckIds) {
    app.querySelector('[data-action="retry"]').addEventListener('click', () => {
      navigate('game', { deckIds });
    });
  }
  app.querySelector('[data-action="back"]').addEventListener('click', () => navigate('start'));
}
