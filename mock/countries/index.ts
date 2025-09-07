import countriesRu from './countries_ru.json';
import countriesEn from './countries_en.json';

const successResponses : Record<string, object> = {
    ru: countriesRu,
    en: countriesEn,
};

const getSuccessResponse = (locale: string) : string => {
    const response = successResponses[locale] || successResponses.en;
    return JSON.stringify(response);
};

export default {
    getSuccessResponse,
};
