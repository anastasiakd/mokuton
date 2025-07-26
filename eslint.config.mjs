// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import stylistic from '@stylistic/eslint-plugin';
import vue from 'eslint-plugin-vue';

export default withNuxt(
    {
        plugins: {
            '@stylistic': stylistic,
            '@vue': vue,
        },
        rules: {
            '@stylistic/indent': ['error', 4],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/semi': ['error', 'always'],
        },
    },
    {
        files: ['pages/**/*.vue'],
        rules: {
            'vue/multi-word-component-names': 'off'
        },
    },
);
