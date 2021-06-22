const commonExtends = ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'];
const commonPlugins = ['react', 'react-hooks'];
const commonRules = {
  'react/display-name': 'off',
  'react/prop-types': 'off',
  // 检查 Hook 的规则
  'react-hooks/rules-of-hooks': 'error',
  // 检查 effect 的依赖
  'react-hooks/exhaustive-deps': 'warn',
};

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  extends: [...commonExtends],
  plugins: [...commonPlugins],
  rules: { ...commonRules },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
      },
      extends: [...commonExtends, 'plugin:@typescript-eslint/recommended'],
      plugins: [...commonPlugins, '@typescript-eslint'],
      rules: {
        ...commonRules,
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
