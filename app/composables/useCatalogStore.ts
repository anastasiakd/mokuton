import {defineStore} from 'pinia';

export const useCatalogStore = defineStore('catalog', () => {
    const items = ref<CatalogItem[]>([]);
    const isEmpty = computed(() => items.value.length === 0);

    async function getList() {
        const {data} = await useAsyncData<CatalogItem[]>('catalog-list', () => $fetch('/api/catalog'));
        if (data.value) {
            items.value = data.value;
        }
    }

    async function getProduct(id: string) {
        const {data} = await useAsyncData<CatalogProductItem>(
            `catalog-product-${id}`,
            () => $fetch(`/api/product/${id}`),
        );
        return data.value;
    }

    return {
        items,
        isEmpty,
        getList,
        getProduct,
    };
});