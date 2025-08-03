import type {CatalogProduct} from '#shared/types/CatalogProduct';
import response from '../../mock/catalog';

export default defineEventHandler(async (event): Promise<CatalogProduct[]> => {
    const locale = getQuery(event).lang as string;
    return JSON.parse(response.getSuccessResponse(locale));
});