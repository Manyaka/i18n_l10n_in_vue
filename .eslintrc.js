module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // override default options for rules from base configurations
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    // disable rules from base configurations
    indent: ['off', 2],
    'spaced-comment': 'off',
    'prefer-const': 'off',
    semi: ['error', 'always'],
  }
};
