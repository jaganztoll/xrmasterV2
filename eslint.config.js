import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  { ignores: ['dist'] },

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',         // React 17+ braucht import React nicht
      'react/prop-types': 'off',                 // PropTypes ausschalten, falls du keine nutzt
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      // weitere Regeln hier nach Bedarf
    },
    settings: {
      react: {
        version: 'detect', // React-Version automatisch erkennen
      },
    },
  },
];
