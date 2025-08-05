import {defineStore} from 'pinia';

export const useCatalogStore = defineStore('catalog', () => {
    const items = ref<CatalogProduct[]>([]);
    const isEmpty = computed(() => items.value.length === 0);

    async function getList() {
        const {data} = await useAsyncData<CatalogProduct[]>(
            'catalog-list',
            () => $fetch(useRequestQuery('/api/catalog')),
        );
        if (data.value) {
            items.value = data.value;
        }
    }

    async function getProduct(id: string) {
        const {data} = await useAsyncData<ProductDetail>(
            `catalog-product-${id}`,
            () => $fetch(useRequestQuery(`/api/product/${id}`)),
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