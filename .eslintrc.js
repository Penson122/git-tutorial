module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['**/*.test.js'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: { 'jest/prefer-expect-assertions': 'off' },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  ignorePatterns: ['**/*.test.js'],
  rules: {
  },
};
