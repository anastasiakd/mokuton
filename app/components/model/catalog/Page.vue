<script setup lang="ts">
import Filter from './Filter.vue';
import Catalog from './Catalog.vue';

const modelStore = useModelStore();
const {initCatalog} = modelStore;

initCatalog();
</script>

<template>
    <Filter/>

    <div class="models-container">
        <Catalog/>
    </div>
</template>

<style lang="scss" scoped>
.models {
    &-container {
        grid-column: 2;
    }
}
</style>