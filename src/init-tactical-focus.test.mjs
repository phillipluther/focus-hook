import assert from 'assert';
import jsdomGlobal from 'jsdom-global';
import tacticalFocus from './init-tactical-focus.mjs';

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
  const customEl = document.createElement('div');
  customEl.id = 'custom';
  document.body.appendChild(customEl);
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

  it('adds the default class hook on TAB press', () => {
    tacticalFocus();
    mockKeydown();

    assert.strictEqual(rootEl.classList.contains(classHook), true);
  });

  it('removes the default class hook on mouse click', () => {
    tacticalFocus();
    mockKeydown(); // known-good from previous test
    mockMousedown();

    assert.strictEqual(rootEl.classList.contains(classHook), false);
  });

  it('adds a custom class hook on TAB press', () => {
    tacticalFocus({ name: 'custom-hook' });
    mockKeydown();

    assert.strictEqual(rootEl.classList.contains('custom-hook'), true);
  });

  it('removes a custom class hook on mouse click', () => {
    tacticalFocus({ name: 'custom-hook' });
    mockKeydown();
    mockMousedown();

    assert.strictEqual(rootEl.classList.contains('custom-hook'), false);
  });

  it('adds a class hook to an element with the given selector', () => {
    tacticalFocus({ target: '#custom' });
    mockKeydown();

    assert.strictEqual(document.getElementById('custom').classList.contains(classHook), true);
  });

  it('removes a class hook from an element with the given selector', () => {
    tacticalFocus({ target: '#custom' });
    mockKeydown();
    mockMousedown();

    assert.strictEqual(document.getElementById('custom').classList.contains(classHook), false);
  });

  it('adds a class hook to a given node', () => {
    const target = document.getElementById('custom');
    tacticalFocus({ target });
    mockKeydown();

    assert.strictEqual(target.classList.contains(classHook), true);
  });

  it('removes a class hook from a given element', () => {
    const target = document.getElementById('custom');
    tacticalFocus({ target });

    mockKeydown();
    mockMousedown();

    assert.strictEqual(target.classList.contains(classHook), false);
  });
});
