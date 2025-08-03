import {defineStore} from 'pinia';
import type {CatalogItem} from '#shared/types/CatalogItem';

export const useCatalogStore = defineStore('catalog', () => {
    const items = ref<CatalogItem[]>([]);
    const isEmpty = computed(() => items.value.length === 0);

    async function getList() {
        const {data} = await useAsyncData<CatalogItem[]>('catalog-list', () => $fetch('/api/catalog'));
        if (data.value) {
            items.value = data.value;
        }
    }

    return {
        items,
        isEmpty,
        getList,
    };
});