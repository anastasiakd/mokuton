import catalogRu from './catalog_ru.json';
import catalogEn from './catalog_en.json';

const successResponses : Record<string, object> = {
    ru: catalogRu,
    en: catalogEn,
};

const getSuccessResponse = (locale: string) : string => {
    const response = successResponses[locale] || successResponses.EN;
    return JSON.stringify(response);
};

export default {
    getSuccessResponse,
};
