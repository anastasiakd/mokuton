const successResponses: Record<string, Record<string, object>> = {
    armchair_bw: {
        ru: import('./armchair_bw_ru.json'),
        en: import('./armchair_bw_en.json'),
    },
    honeycombs_bookcase: {
        ru: import('./honeycombs_bookcase_ru.json'),
        en: import('./honeycombs_bookcase_en.json'),
    },
    kitchen_child: {
        ru: import('./kitchen_child_ru.json'),
        en: import('./kitchen_child_en.json'),
    },
    nightstand_2_drawers: {
        ru: import('./nightstand_2_drawers_ru.json'),
        en: import('./nightstand_2_drawers_en.json'),
    },
    table: {
        ru: import('./table_ru.json'),
        en: import('./table_en.json'),
    },
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