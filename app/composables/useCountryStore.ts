import {defineStore} from 'pinia';

export const useCountryStore = defineStore('country', () => {
    const items = ref<Country[]>([]);

    async function getList() {
        if (items.value.length > 0) {
            return;
        }

        const {data} = await useAsyncData<Country[]>(
            'country-list',
            () => $fetch(useRequestQuery('/api/countries')),
        );
        if (data.value) {
            items.value = data.value;
        }
    }

    return {
        items,
        getList,
    };
});