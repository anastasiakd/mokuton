// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    modules: [
        '@nuxt/content',
        '@nuxt/eslint',
        '@nuxt/test-utils',
        '@pinia/nuxt',
        '@nuxt/ui',
    ],
    css: ['~/assets/css/main.css'],
});