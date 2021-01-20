module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    '@vue/standard',
    '@vue/typescript/recommended',
    '@vue/prettier/recommended',
    '@vue/prettier/@typescript-eslint',
  ],
  globals: {},
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['import'],
  rules: {
    'import/order': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  overrides: [
    {
      files: ['test/**/*', '**/*.spec.js', '**/*.spec.ts'],
      env: { jest: true },
    },
  ],
}
