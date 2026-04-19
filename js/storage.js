const KEYS = {
  settings: 'hyakunin.settings',
  wrongCounts: 'hyakunin.wrongCounts',
};

export function loadSettings() {
  try {
    const raw = localStorage.getItem(KEYS.settings);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveSettings(settings) {
  localStorage.setItem(KEYS.settings, JSON.stringify(settings));
}

export function loadWrongCounts() {
  try {
    const raw = localStorage.getItem(KEYS.wrongCounts);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveWrongCounts(counts) {
  localStorage.setItem(KEYS.wrongCounts, JSON.stringify(counts));
}

export function incrementWrongCount(cardId) {
  const counts = loadWrongCounts();
  counts[cardId] = (counts[cardId] || 0) + 1;
  saveWrongCounts(counts);
}
