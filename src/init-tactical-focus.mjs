export function initTacticalFocus(options = {}) {
  const { target, name, debug } = {
    target: 'body',
    name: 'tactical-focus',
    debug: false,
    ...options,
  };

  const targetEl = typeof target === 'string' ? document.querySelector(target) : target;

  function activateKeyboardMode({ key }) {
    if (key === 'Tab') {
      if (debug) {
        console.log('[tactical-focus] Activating keyboard mode');
      }

      window.removeEventListener('keydown', activateKeyboardMode);
      window.addEventListener('mousedown', activateMouseMode);

      if (targetEl !== null) {
        targetEl.classList.add(name);
      }
    }
  }

  function activateMouseMode() {
    if (debug) {
      console.log('[tactical-focus] Activating mouse mode');
    }

    window.removeEventListener('mousedown', activateMouseMode);
    window.addEventListener('keydown', activateKeyboardMode);

    if (targetEl !== null) {
      targetEl.classList.remove(name);
    }
  }

  // default mouse
  activateMouseMode();
}
