import * as start from './screens/start.js';
import * as game from './screens/game.js';
import * as result from './screens/result.js';
import * as settings from './screens/settings.js';
import * as explanation from './screens/explanation.js';

const screens = { start, game, result, settings, explanation };
const appEl = document.getElementById('app');

export function navigate(name, params = {}) {
  const screen = screens[name];
  if (!screen) throw new Error(`Unknown screen: ${name}`);
  appEl.innerHTML = '';
  screen.render(appEl, params);
}

navigate('start');
