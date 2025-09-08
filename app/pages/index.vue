<script setup lang="ts">
definePageMeta({
    middleware: () => {
        return navigateTo('/product/catalog');
    }
});
</script>

<template>
    <ProductCatalogPage/>
</template>

<style scoped>

</style>