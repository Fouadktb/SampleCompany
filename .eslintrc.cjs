module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'next',
  ],

  plugins: ['prettier', 'unused-imports'],
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': 'error',
    'react-refresh/only-export-components': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' },
    ],
  },
}
