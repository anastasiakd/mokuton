import type {CatalogProductItem} from '#shared/types/CatalogProductItem';
import mockData from '../../../mock/product';

export default defineEventHandler(async (event) : Promise<CatalogProductItem> => {
    const requestProductId = getRouterParam(event, 'id');
    const responseData = requestProductId && mockData[requestProductId];
    if (responseData) {
        return JSON.parse(responseData);
    } else {
        throw createError({
            statusCode: 404,
            statusMessage: 'Not found',
        });
    }
});
