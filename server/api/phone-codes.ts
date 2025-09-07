import type {PhoneCode} from '#shared/types/PhoneCode';
import response from '../../mock/phone/codes';

export default defineEventHandler(async (event): Promise<PhoneCode[]> => {
    const locale = getQuery(event).lang as string;
    return JSON.parse(response.getSuccessResponse(locale));
});