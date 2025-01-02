import type { PluginCreator } from 'postcss';

const postcssRemoveFontFace: PluginCreator<void> = () => {
  return {
    postcssPlugin: 'postcss-remove-font-face',
    AtRule: {
      'font-face': (rule) => {
        rule.remove();
      },
    },
  };
};

postcssRemoveFontFace.postcss = true;

export default postcssRemoveFontFace;
