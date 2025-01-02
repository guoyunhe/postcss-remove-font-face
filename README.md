# postcss-remove-font-face

![Version](https://img.shields.io/npm/v/postcss-remove-font-face)
![Downloads](https://img.shields.io/npm/dw/postcss-remove-font-face)
![Bundle size](https://img.shields.io/bundlephobia/minzip/postcss-remove-font-face)

Remove @font-face blocks to avoid downloading fonts and speed up your websites.

## Installation

```bash
npm install --save-dev postcss-remove-font-face
```

## Configuration

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
