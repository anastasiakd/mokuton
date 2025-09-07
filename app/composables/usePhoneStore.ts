import {defineStore} from 'pinia';

export const usePhoneStore = defineStore('phone', () => {
    const phoneCodes = ref<PhoneCode[]>([]);

    async function getPhoneCodes() {
        if (phoneCodes.value.length > 0) {
            return;
        }

        const {data} = await useAsyncData<PhoneCode[]>(
            'phone-codes-list',
            () => $fetch(useRequestQuery('/api/phone-codes')),
        );
        if (data.value) {
            phoneCodes.value = data.value;
        }
    }

    return {
        phoneCodes,
        getPhoneCodes,
    };
});