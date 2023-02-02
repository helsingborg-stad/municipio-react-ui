module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
    'stylelint-config-prettier-scss',
  ],
  plugins: ['stylelint-selector-bem-pattern'],
  overrides: [],
  rules: {
    'plugin/selector-bem-pattern': {
      preset: 'bem',
      componentName: '(([a-z0-9]+(?!-$)-?)+)',
      componentSelectors: {
        initial(componentName) {
          const WORD = '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*'
          const element = '(?:__' + WORD + ')?'
          const modifier = '(?:--' + WORD + '){0,2}'
          return new RegExp('^\\.' + componentName + element + modifier + '$')
        },
      },
      ignoreSelectors: ['.*\\.has-.*', '.*\\.is-.*'],
    },
    'color-no-invalid-hex': true,
    'selector-class-pattern': null,
  },
}
