import assert from 'assert';
import jsdomGlobal from 'jsdom-global';
import tacticalFocus from './tactical-focus.mjs';

let rootEl;
let classHook;

function mockKeydown(key = 'Tab') {
  const event = new window.KeyboardEvent('keydown', { key });
  window.dispatchEvent(event);
}

function mockMousedown(type = 'mousedown') {
  const event = new window.MouseEvent(type);
  window.dispatchEvent(event);
}

before(() => {
  jsdomGlobal();
});

beforeEach(() => {
  rootEl = document.body;
  classHook = 'tactical-focus';
});

describe('tactical-focus', () => {
  it('applies no class hook on init', () => {
    tacticalFocus();
    assert.strictEqual(rootEl.classList.contains(classHook), false);
  });

  it('applies a class hook on TAB press', () => {
    tacticalFocus();
    mockKeydown();

    assert.strictEqual(rootEl.classList.contains(classHook), true);
  });

  it('removes a class hook on mouse click', () => {
    tacticalFocus();
    mockKeydown(); // known-good from previous test
    mockMousedown();

    assert.strictEqual(rootEl.classList.contains(classHook), false);
  });
});
