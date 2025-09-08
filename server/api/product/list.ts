import response from '~~/mock/product/catalog';

export default defineEventHandler(async (event): Promise<CatalogProduct[]> => {
    const locale = getQuery(event).lang as string;
    return JSON.parse(response.getSuccessResponse(locale));
});