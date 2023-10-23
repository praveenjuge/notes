---
title: "CSS Snippets"
---

## System Font Stack

```css
html,
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
}
```

## Antialias

```css
html,
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

## Viewport Height

```css
body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}
```
