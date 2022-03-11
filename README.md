# focus-hook

A tiny utility that applies a class hook for tactical :focus styling.

## Why?

### tl;dr

`focus-hook` lets you write CSS that says, "If an element is focused _and_ the user is actively using a keyboard."

```
.focus-hook a:focus {
  outline: 2px solid green;
}
```

### Not Too Long; Did Read

Browsers apply default `:focus` styles to focusable DOM elements, such as those blue or yellow outlines in Webkit-based browsers or Firefox's dotted gray border. Removing these defaults makes keyboard operability difficult, if not impossible, since you have no idea which element is focused.

Activating focusable elements give them focus, too. This often spurs design conflicts when we don't want that bespoke button getting a giant glowing ring around it when clicked.

Enter `focus-hook`. This tiny (\_N_kb, measurement incoming) library toggles a class name on an HTML document's body (or other element of your choice) so you can craft `:focus` styles applied only when a user is navigating via keyboard.

## Usage

... soon ...

## License

[MIT](LICENSE)

## Keywords

... soon ...
