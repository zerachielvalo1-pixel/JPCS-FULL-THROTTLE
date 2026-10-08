/* Entry point. Each feature is a module with its own init().
   Progressive enhancement: the page reads fine with JS off. */

import { initLights } from './lights.js';

const modules = [initLights];

function boot() {
  modules.forEach((init) => {
    try {
      init();
    } catch (err) {
      console.error('[Full Throttle] module failed:', err);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

export { modules };