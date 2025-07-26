<script setup lang="ts">
// Лэйаут страниц по-умолчанию
const layout = 'default';
</script>

<template>
    <NuxtLayout :name="layout">
        <NuxtPage/>
    </NuxtLayout>
</template>

<style scoped>
</style>
