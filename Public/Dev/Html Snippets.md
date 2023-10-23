---
title: "HTML Snippets"
---

## Lorem Ipsum

```html
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.
```

## Unicode

```html
• ·
```

## SVG Favicon

```html
<svg xmlns="http://w3.org/2000/svg" viewBox="0 0 100 100">
  <text y=".9em" font-size="90">😍</text>
</svg>
```

## Input Modes

```html
<input type="text" inputmode="decimal" />

For telephone numbers:
<input type="text" inputmode="tel" />

For email:
<input type="email" inputmode="email" />

For URL:
<input type="text" inputmode="url" />

For Search:
<input type="text" inputmode="search" />
```

## Google Fonts

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<link rel="preload" as="style" href="$CSS&display=swap" />

<link
  rel="stylesheet"
  href="$CSS&display=swap"
  media="print"
  onload="this.media='all'"
/>
```

## Regex for Hardcoded Strings

```shell
(>|title="|message="|placeholder="|value="|alt="|label=")[A-Za-z0-9]{1,}
```
