# postcss-remove-font-face

![Version](https://img.shields.io/npm/v/postcss-remove-font-face)
![Downloads](https://img.shields.io/npm/dw/postcss-remove-font-face)
![Bundle size](https://img.shields.io/bundlephobia/minzip/postcss-remove-font-face)

Remove @font-face blocks to avoid downloading fonts and speed up your websites.

## Installation

```bash
npm install --save-dev postcss-remove-font-face
```

## Examples

### PostCSS

Ignore all remote fonts:

```js
// postcss.config.ts
import postcssRemoveFontFace from 'postcss-remove-font-face';

export default {
  plugins: [postcssRemoveFontFace()],
};
```

Ignore all remote fonts, except for `iconfont`:

```js
// postcss.config.ts
import postcssRemoveFontFace from 'postcss-remove-font-face';

export default {
  plugins: [
    postcssRemoveFontFace({
      fontFamilyWhiteList: ['iconfont'],
    }),
  ],
};
```

### Vite

```js
// vite.config.ts
import postcssRemoveFontFace from 'postcss-remove-font-face';

export default defineConfig({
  css: {
    postcss: {
      plugins: [postcssRemoveFontFace()],
    },
  },
});
```

## Options

### fontFamilyWhiteList

`@font-face` that match the `font-family` white list will not be removed.

This is usually useful for icon fonts, which may break the site if removed.
