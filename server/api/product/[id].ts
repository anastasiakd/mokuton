import type {CatalogProductItem} from '#shared/types/CatalogProductItem';
import response from '../../../mock/product';

export default defineEventHandler(async (event) : Promise<CatalogProductItem> => {
    const locale = getQuery(event).lang as string;
    const requestProductId = getRouterParam(event, 'id');
    const responseData = requestProductId && response.getSuccessResponse(locale, requestProductId);
    if (responseData) {
        return JSON.parse(responseData);
    } else {
        throw createError({
            statusCode: 404,
            statusMessage: 'Not found',
        });
    }
});
