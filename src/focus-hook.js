const defaultOptions = {
  // target tag we'll apply the hook to (string|node)
  target: 'body',
  // name of the class hook (string)
  name: 'kb-focus-hook',
  // adds semi-helpful console logging; currently does nothing (bool)
  debug: false,
};

export default function focusHook(userOptions = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  const options = {
    ...defaultOptions,
    ...userOptions,
  };

  //
  const target =
    typeof options.target === 'string' ? document.querySelector(options.target) : options.target;

  // wildly simplistic/narrow for now; we'll refine this
  function applyHook({ key }) {
    if (key === 'Tab') {
      window.removeEventListener('keydown', applyHook);
      window.addEventListener('mousedown', removeHook);
      target.classList.add(options.name);
    }
  }

  function removeHook() {
    window.removeEventListener('mousedown', removeHook);
    window.addEventListener('keydown', applyHook);
    target.classList.remove(options.name);
  }

  // TODO: make this thing usable as a side-effect/iife
  removeHook();
}
