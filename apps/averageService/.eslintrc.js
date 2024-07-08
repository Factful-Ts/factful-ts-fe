/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@factful/eslint-config/mixins/next.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
