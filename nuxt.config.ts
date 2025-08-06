// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',

    devtools: {enabled: true},

    modules: [
        '@nuxt/content',
        '@nuxt/eslint',
        '@nuxt/test-utils',
        '@pinia/nuxt',
        '@nuxt/ui',
        '@nuxtjs/i18n',
    ],

    nitro: {
        routeRules: {
            // TODO: настроить прокси для внешних изображений
            '/image/**': {
                proxy: {
                    to: 'http://localhost:8000/assets/images/external/**',
                },
            },
        },
    },

    alias: {
        // TODO: не работает
        'images': fileURLToPath(new URL('./assets/images', import.meta.url)),
    },

    app: {
        head: {
            title: 'MOKUTON wood design',
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.png' },
            ],
        },
    },

    css: [
        '~/assets/css/styles.css',
        '~/assets/scss/styles.scss',
    ],

    i18n: {
        strategy: 'no_prefix',
        defaultLocale: 'en',
        locales: [
            { code: 'en', name: 'English', file: 'en.json' },
            { code: 'ru', name: 'Русский', file: 'ru.json' }
        ],
    },
});