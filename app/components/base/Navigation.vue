<script setup lang="ts">
const route = useRoute();

const items = computed(() => [
    {
        label: $t('nav-product'),
        to: '/product/catalog',
        active: route.path.startsWith('/product'),
    },
    {
        label: $t('nav-model'),
        to: '/model/catalog',
        active: route.path.startsWith('/model'),
    },
    {
        label: $t('nav-bespoke'),
        to: '/bespoke',
    },
    {
        label: $t('nav-reviews'),
        to: '/reviews',
    }
]);
</script>

<template>
    <nav class="main-navigation">
        <UNavigationMenu
            :items="items"
            color="neutral"
            variant="link"
            class="w-full justify-center uppercase"
        />
    </nav>
</template>

<style scoped>

</style>