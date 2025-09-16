<script setup lang="ts">
import CatalogItem from './CatalogItem.vue';

const modelStore = useModelStore();
const {
    filterModels: models,
} = storeToRefs(modelStore);
</script>

<template>
    <div
        v-testid="'products-catalog'"
        class="models-catalog pt-8"
    >
        <ul class="models columns-3">
            <CatalogItem
                v-for="model in models"
                :key="model.id"
                :model="model"
            />
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.models {
    grid-template-columns: repeat(auto-fill, minmax(29%, 1fr));

    &-catalog {
        grid-column: 1 / span 3;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, minmax(min-content, max-content));

        ul.models {
            grid-column: 1 / span 3;
            display: grid;
            grid-auto-rows: auto;
            grid-gap: 2rem;
            grid-auto-flow: row;
        }
    }
}
</style>