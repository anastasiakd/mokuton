import type {CatalogItem} from '#shared/types/CatalogItem';
import response from '../../mock/catalog';

export default defineEventHandler(async () : Promise<CatalogItem[]> => {
    return JSON.parse(response.success);
});