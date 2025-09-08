import {defineStore} from 'pinia';

export const useProductStore = defineStore('product-catalog', () => {
    const products = ref<CatalogProduct[]>([]);
    const categories = ref<CatalogCategory[]>([]);

    async function getCategories() {
        const {data} = await useAsyncData<CatalogCategory[]>(
            'product-categories-list',
            () => $fetch(useRequestQuery('/api/product/category/list')),
        );
        if (data.value) {
            categories.value = data.value;
        }
    }

    async function getProducts() {
        const {data} = await useAsyncData<CatalogProduct[]>(
            'products-list',
            () => $fetch(useRequestQuery('/api/product/list')),
        );
        if (data.value) {
            products.value = data.value;
        }
    }

    async function getProduct(id: string) {
        const {data} = await useAsyncData<ProductDetail>(
            `product-${id}`,
            () => $fetch(useRequestQuery(`/api/product/${id}`)),
        );
        return data.value;
    }

    async function initCatalog() {
        await Promise.all([
            getCategories(),
            getProducts(),
        ]);
    }

    const filterCategory = ref<CatalogCategory>();
    async function setFilter(value: CatalogCategory) {
        filterCategory.value = value;
    }

    const filterProducts = computed(() => {
        if (!filterCategory) {
            return products.value;
        }
        return products.value.filter(product => (
            !filterCategory.value || product.category.includes(filterCategory.value?.id)
        ));
    });

    return {
        categories,
        products,
        getProduct,
        initCatalog,

        filterCategory,
        filterProducts,
        setFilter,
    };
});