import assert from 'assert';
import jsdomGlobal from 'jsdom-global';
import { initTacticalFocus } from './init-tactical-focus';

let rootEl: HTMLElement;
let classHook: string;

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
    initTacticalFocus();
    assert.strictEqual(rootEl.classList.contains(classHook), false);
  });

  it('adds the default class hook on TAB press', () => {
    initTacticalFocus();
    mockKeydown();

    assert.strictEqual(rootEl.classList.contains(classHook), true);
  });

  it('removes the default class hook on mouse click', () => {
    initTacticalFocus();
    mockKeydown(); // known-good from previous test
    mockMousedown();

    assert.strictEqual(rootEl.classList.contains(classHook), false);
  });

  it('adds a custom class hook on TAB press', () => {
    initTacticalFocus({ name: 'custom-hook' });
    mockKeydown();

    assert.strictEqual(rootEl.classList.contains('custom-hook'), true);
  });

  it('removes a custom class hook on mouse click', () => {
    initTacticalFocus({ name: 'custom-hook' });
    mockKeydown();
    mockMousedown();

    assert.strictEqual(rootEl.classList.contains('custom-hook'), false);
  });

  it('adds a class hook to an element with the given selector', () => {
    initTacticalFocus({ target: '#custom' });
    mockKeydown();

    const el = document.getElementById('custom');

    if (el !== null) {
      assert.strictEqual(el.classList.contains(classHook), true);
    } else {
      throw new assert.AssertionError({
        message: 'Target is null',
      });
    }
  });

  it('removes a class hook from an element with the given selector', () => {
    initTacticalFocus({ target: '#custom' });
    mockKeydown();
    mockMousedown();

    const el = document.getElementById('custom');

    if (el !== null) {
      assert.strictEqual(el.classList.contains(classHook), false);
    } else {
      throw new assert.AssertionError({
        message: 'Target is null',
      });
    }
  });

  it('adds a class hook to a given node', () => {
    const target = document.getElementById('custom');
    initTacticalFocus({ target });
    mockKeydown();

    if (target !== null) {
      assert.strictEqual(target.classList.contains(classHook), true);
    } else {
      throw new assert.AssertionError({
        message: 'Target is null',
      });
    }
  });

  it('removes a class hook from a given element', () => {
    const target = document.getElementById('custom');
    initTacticalFocus({ target });

    mockKeydown();
    mockMousedown();

    if (target !== null) {
      assert.strictEqual(target.classList.contains(classHook), false);
    } else {
      throw new assert.AssertionError({
        message: 'Target is null',
      });
    }
  });
});
