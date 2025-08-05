const successResponses: Record<string, Record<string, object>> = {
    table: {
        ru: import('./table_ru.json'),
        en: import('./table_en.json'),
    },
    honeycombs_bookcase: {
        ru: import('./honeycombs_bookcase_ru.json'),
        en: import('./honeycombs_bookcase_en.json'),
    }
};

const getSuccessResponse = async (locale: string, id: string): Promise<string> => {
    const response = successResponses[id];
    if (response) {
        return Promise.resolve(response[locale] || response.en)
            .then(JSON.stringify);
    }
    return Promise.resolve('');
};

export default {
    getSuccessResponse,
};