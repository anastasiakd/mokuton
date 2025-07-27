<script setup lang="ts">
const {data} = await useAsyncData('catalog-list', () => $fetch('/api/catalog'));
</script>

<template>
    <section>
        {{ $t('nav-catalog')}}
        {{ data }}
    </section>
</template>

<style scoped>

</style>