export default () => {
    const {locale, locales, setLocale} = useI18n();

    return {
        locale,
        locales,
        setLocale,
    };
};
