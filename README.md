# tactical-focus

A micro utility that applies a class hook for tactical :focus styling.

## Why?

### tl;dr

`tactical-focus` lets you write CSS that says, "If an element is focused _and_ the user is actively using a keyboard."

```
.tactical-focus a:focus {
  outline: 2px solid green;
}
```

### Not Too Long; Did Read

Browsers apply default `:focus` styles to focusable DOM elements, such as those blue or yellow outlines in Webkit-/Blink-based browsers or Firefox's dotted gray border. Removing these defaults makes keyboard operability difficult, if not impossible, since you have no idea which element is focused.

Activating focusable elements give them focus, too. This often spurs design conflicts when we don't want that bespoke button getting a giant glowing ring around it when clicked.

Enter `tactical-focus`. This tiny (about 600 _bytes_) library toggles a class name on an HTML document's body (or other element of your choice) so you can craft `:focus` styles applied only when a user is navigating via keyboard.

## Installation and Usage

First, install `tactical-focus` --

```
npm install tactical-focus
```

Then, import and initialize it in your project.

```
import { initTacticalFocus } from 'tactical-focus';

...

initTacticalFocus();
```

### Recommended Placement

`tactical-focus` is super light-weight and only runs once. You don't need to stress on optimal script placement or execution timing; just follow common sense and best practices.

Since it's a utility that assists in page navigation, however, it's recommended you run it as soon as practical after the DOM is ready.

### Customization Options

```
// all options and their defaults
initTacticalFocus({
  // class hook that gets toggle on keyboard/mouse mode of operation
  name: 'tactical-focus',
  // element where the class hook gets applied; accepts a selector string or DOM node
  target: 'body',
  // adds semi-helpful console logging
  debug: false,
})
```

### Types

Type declarations are included for out-of-the-box TypeScript support; no `@types` needed.

## License

[MIT](LICENSE)
