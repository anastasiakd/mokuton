<script setup lang="ts">
import Filter from './Filter.vue';
import Catalog from './Catalog.vue';

const productStore = useProductStore();
const {initCatalog} = productStore;

initCatalog();
</script>

<template>
    <Filter/>

    <div class="products-container">
        <Catalog/>
    </div>
</template>

<style lang="scss" scoped>
.products {
    &-container {
        grid-column: 2;
    }
}
</style>