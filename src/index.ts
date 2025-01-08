import type { PluginCreator } from 'postcss';

export interface PostcssRemoveFontFaceOptions {
  fontFamilyWhiteList?: string[];
}

const postcssRemoveFontFace: PluginCreator<PostcssRemoveFontFaceOptions> = ({
  fontFamilyWhiteList,
}) => {
  return {
    postcssPlugin: 'postcss-remove-font-face',
    AtRule: {
      'font-face': (rule) => {
        let fontFamily = '';
        rule.walkDecls((decl) => {
          if (decl.prop === 'font-family') {
            fontFamily = decl.value?.replaceAll('"', '')?.replaceAll("'", '');
          }
        });
        if (fontFamilyWhiteList?.includes(fontFamily)) {
          return;
        }
        rule.remove();
      },
    },
  };
};

postcssRemoveFontFace.postcss = true;

export default postcssRemoveFontFace;
