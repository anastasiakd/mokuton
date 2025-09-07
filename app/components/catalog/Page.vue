<script setup lang="ts">
const catalogStore = useCatalogStore();
const {initCatalog} = catalogStore;

initCatalog();
</script>

<template>
    <CatalogFilter/>

    <div class="products-container">
        <CatalogProducts/>
    </div>
</template>

<style lang="scss" scoped>
.products {
    &-container {
        grid-column: 2;
    }
}
</style>