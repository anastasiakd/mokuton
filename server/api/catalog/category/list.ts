import response from '../../../../mock/catalog/category';

export default defineEventHandler(async (event): Promise<CatalogCategory[]> => {
    const locale = getQuery(event).lang as string;
    return JSON.parse(response.getSuccessResponse(locale));
});