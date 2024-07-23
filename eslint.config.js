import eslintJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortKeys from 'eslint-plugin-sort-keys';
import globals from 'globals';
import eslintTs from 'typescript-eslint';

export default [


  // Javascript & Typescript
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
      'sort-keys': sortKeys
    },
    rules: {
      ...eslintJs.configs.recommended.rules,
      ...eslintTs.configs.recommended.rules,
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'sort-imports': 'off',
      'sort-keys': 'error',
      'sort-keys/sort-keys-fix': 'error'
    }
  },

  // Stylistic
  {
    files: ['**/*.{js,jsx, ts, tsx}'],
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      ...stylistic.configs['all-flat'].rules,
      '@stylistic/indent': [
        'error',
        2
      ],
      '@stylistic/linebreak-style': [
        'error',
        'unix'
      ],
      '@stylistic/quote-props': [
        'error',
        'as-needed'
      ],
      '@stylistic/quotes': [
        'error',
        'single'
      ]
    }
  },

  // React
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parser: parserTs,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-refresh/only-export-components': 'warn',
      'react/react-in-jsx-scope': 'off'
    }
  }

  /*
   * // Prettier
   *  {
   *    ...pluginPrettierRec,
   *    rules: {
   *
   *    },
   *  },
   */
];