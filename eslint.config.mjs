import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
      quotes: ['error', 'single', { 'allowTemplateLiterals': true }],
      'block-spacing': 'error',
      camelcase: 'error',
      indent: ['error', 2],
      'comma-spacing': ['error', { before: false, after: true }],
      'space-before-function-paren': ['error', 'never'],
      'astro/jsx-a11y/no-noninteractive-tabindex': ['warn', { tags: ['li'], }],
    }
  }
];
