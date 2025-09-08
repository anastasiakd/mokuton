<script setup lang="ts">
const modelStore = useModelStore();
const {
    categories,
    filterCategory,
} = storeToRefs(modelStore);

function onChooseCategory(category: CatalogCategory | undefined) {
    modelStore.setFilter(category);
}
</script>

<template>
    <div class="catalog-filter pb-4 pt-4">
        <ul class="flex flex-wrap gap-4 items-center justify-center width-auto text-center">
            <li
                class="cursor-pointer"
                :class="{'font-semibold': !filterCategory}"
                @click="onChooseCategory(undefined)"
            >
                Все
            </li>

            <li
                v-for="category in categories"
                :key="category.id"
                class="cursor-pointer"
                :class="{'font-semibold': filterCategory?.id === category.id}"
                @click="onChooseCategory(category)"
            >
                {{ category.name }}
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use "~/assets/scss/abstracts/variables" as *;

.catalog-filter {
    border-bottom: 1px solid $secondary-color;
    grid-column: span 3;
    margin-left: 25%;
    margin-right: 25%;
}
</style>