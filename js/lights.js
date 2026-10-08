/* Starting lights sequence — F1 broadcast style.
   5 lights illuminate at 1s intervals, hold briefly, then extinguish. */

const INTERVAL_MS = 1000;
const HOLD_MIN_MS = 900;
const HOLD_MAX_MS = 2200;
const RESTART_MS  = 4000;

export function initLights() {
  const root = document.querySelector('[data-lights]');
  if (!root) return;

  const units = [...root.querySelectorAll('.lights__unit')];
  if (!units.length) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    units.forEach((u) => u.classList.add('is-on'));
    return;
  }

  let timers = [];
  const clear = () => { timers.forEach(clearTimeout); timers = []; };
  const off   = () => units.forEach((u) => u.classList.remove('is-on'));

  function run() {
    clear();
    off();

    units.forEach((unit, i) => {
      timers.push(setTimeout(() => unit.classList.add('is-on'), i * INTERVAL_MS));
    });

    const allOnAt = units.length * INTERVAL_MS;
    const hold    = HOLD_MIN_MS + Math.random() * (HOLD_MAX_MS - HOLD_MIN_MS);

    timers.push(setTimeout(() => {
      off();
      timers.push(setTimeout(run, RESTART_MS));
    }, allOnAt + hold));
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) clear();
    else run();
  });

  run();
}