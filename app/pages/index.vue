<script setup lang="ts">
definePageMeta({
    middleware: () => {
        return navigateTo('/catalog');
    }
});
</script>

<template>
    <CatalogPage/>
</template>

<style scoped>

</style>