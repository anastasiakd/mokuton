const isEmpty = value => value === null || value === undefined;
const isEmptyString = value => (!value || value.length === 0);
const isEmptyParam = param => isEmpty(param) || isEmptyString(param.toString());

const parseQueryParam = (key, value) => {
    if (Array.isArray(value) || typeof value === 'object') {
        return value.reduce((result, item) => `${result}&${key}=${item}`, '').substring(1);
    }
    return `${key}=${encodeURIComponent(value)}`;
};
const getQueryString = params => (
    Object.keys(params)
        .reduce((result, param) => (isEmptyParam(params[param]) ? result : [...result, param]), [])
        .reduce((query, param) => `${query}&${parseQueryParam(param, params[param])}`, '')
        .substring(1)
);

export const useRequestQuery = (url, query = {}) => {
    const defaultQuery = {
        lang: useUserLocale().locale.value,
    };
    const mergedQuery = {...defaultQuery, ...query};
    const requestParams = getQueryString(mergedQuery);
    return `${url}?${requestParams}`;
};