import tableRu from './table_ru.json';
import tableEn from './table_en.json';

const successResponses : Record<string, Record<string, object>> = {
    table: {
        ru: tableRu,
        en: tableEn,
    },
};

const getSuccessResponse = (locale: string, id: string) : string => {
    const response = successResponses[id][locale] || successResponses[id].en;
    return JSON.stringify(response);
};

export default {
    getSuccessResponse,
};