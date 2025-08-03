import type {CatalogItem} from '#shared/types/CatalogItem';
import response from '../../mock/catalog';

export default defineEventHandler(async (event): Promise<CatalogItem[]> => {
    const locale = getQuery(event).lang as string;
    return JSON.parse(response.getSuccessResponse(locale));
});