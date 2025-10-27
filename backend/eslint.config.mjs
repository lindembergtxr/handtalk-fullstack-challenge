import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        plugins: { prettier },
        extends: [js.configs.recommended, tseslint.configs.recommended, eslintConfigPrettier],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.node,
        },
        rules: {
            'prettier/prettier': 'warn',
            '@typescript-eslint/triple-slash-reference': 'off',
        },
    },
])
