<script setup lang="ts">
// Лэйаут страниц по-умолчанию
const layout = 'default';
</script>

<template>
    <UApp>
        <NuxtLayout :name="layout">
            <NuxtPage/>
        </NuxtLayout>
    </UApp>
</template>

<style scoped>
</style>
