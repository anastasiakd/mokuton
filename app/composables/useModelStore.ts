import {defineStore} from 'pinia';

export const useModelStore = defineStore('model-catalog', () => {
    const models = ref<CatalogProduct[]>([]);
    const categories = ref<CatalogCategory[]>([]);

    async function getCategories() {
        const {data} = await useAsyncData<CatalogCategory[]>(
            'model-categories-list',
            () => $fetch(useRequestQuery('/api/model/category/list')),
        );
        if (data.value) {
            categories.value = data.value;
        }
    }

    async function getModels() {
        const {data} = await useAsyncData<CatalogProduct[]>(
            'models-list',
            () => $fetch(useRequestQuery('/api/model/list')),
        );
        if (data.value) {
            models.value = data.value;
        }
    }

    async function getModel(id: string) {
        const {data} = await useAsyncData<ProductDetail>(
            `model-${id}`,
            () => $fetch(useRequestQuery(`/api/model/${id}`)),
        );
        return data.value;
    }

    async function initCatalog() {
        await Promise.all([
            getCategories(),
            getModels(),
        ]);
    }

    const filterCategory = ref<CatalogCategory>();
    async function setFilter(value: CatalogCategory) {
        filterCategory.value = value;
    }

    const filterModels = computed(() => {
        if (!filterCategory) {
            return models.value;
        }
        return models.value.filter(model => (
            !filterCategory.value || model.category.includes(filterCategory.value?.id)
        ));
    });

    return {
        categories,
        models,
        getModel,
        initCatalog,

        filterCategory,
        filterModels,
        setFilter,
    };
});