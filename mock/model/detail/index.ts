const successResponses: Record<string, Record<string, object>> = {
    honeycombs_bookcase: {
        ru: import('./honeycombs_bookcase_ru.json'),
        en: import('./honeycombs_bookcase_en.json'),
    },
    kitchen_children: {
        ru: import('./kitchen_children_ru.json'),
        en: import('./kitchen_children_en.json'),
    },
    picklers_triangle: {
        ru: import('./picklers_triangle_ru.json'),
        en: import('./picklers_triangle_en.json'),
    },
    table: {
        ru: import('./table_ru.json'),
        en: import('./table_en.json'),
    },
    tree: {
        ru: import('./tree_ru.json'),
        en: import('./tree_en.json'),
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