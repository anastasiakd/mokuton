import categoryRu from './category_ru.json';
import categoryEn from './category_en.json';

const successResponses : Record<string, object> = {
    ru: categoryRu,
    en: categoryEn,
};

const getSuccessResponse = (locale: string) : string => {
    const response = successResponses[locale] || successResponses.en;
    return JSON.stringify(response);
};

export default {
    getSuccessResponse,
};
