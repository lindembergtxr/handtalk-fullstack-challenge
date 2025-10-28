import eslintJs from '@eslint/js'
import tsEslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'
import pluginVue from 'eslint-plugin-vue'

export default [
    { ignores: ['**/dist/', '**/vendor/'] },
    eslintJs.configs['recommended'],
    {
        files: ['**/*.{js,ts,jsx,tsx,vue}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {},
    },
    ...pluginVue.configs['flat/essential'],
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: vueParser,
            parserOptions: { parser: tsEslint.parser },
        },
    },
    {
        files: ['**/*.{ts,tsx,vue}'],
        languageOptions: { parser: tsEslint.parser },
        parser: 'vue-eslint-parser',
        rules: {
            'vue/multi-word-component-names': 'off',
        },
    },
]
