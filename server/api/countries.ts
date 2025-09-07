import type {Country} from '#shared/types/Country';
import response from '../../mock/countries';

export default defineEventHandler(async (event): Promise<Country[]> => {
    const locale = getQuery(event).lang as string;
    return JSON.parse(response.getSuccessResponse(locale));
});