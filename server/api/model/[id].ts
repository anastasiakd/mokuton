import response from '~~/mock/model/detail';

export default defineEventHandler(async (event): Promise<ProductDetail> => {
    const locale = getQuery(event).lang as string;
    const requestProductId = getRouterParam(event, 'id');
    if (requestProductId) {
        const responseData = await response.getSuccessResponse(locale, requestProductId);
        if (responseData.length > 0) {
            return JSON.parse(responseData);
        }
    }

    throw createError({
        statusCode: 404,
        statusMessage: 'Not found',
    });
});
