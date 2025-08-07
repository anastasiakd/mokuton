export const useUserLocale = defineStore('user-locale', () => {
    const {locale, locales, setLocale} = useI18n();

    const userLocale = computed(() => locale);

    return {
        locale: userLocale,
        locales,
        setLocale,
    };
});
