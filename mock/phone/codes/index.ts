import codesRu from './codes_ru.json';
import codesEn from './codes_en.json';

const successResponses : Record<string, object> = {
    ru: codesRu,
    en: codesEn,
};

const getSuccessResponse = (locale: string) : string => {
    const response = successResponses[locale] || successResponses.en;
    return JSON.stringify(response);
};

export default {
    getSuccessResponse,
};
