<script setup lang="ts">
const items = computed(() => [
    {
        label: $t('nav-catalog'),
        to: '/catalog',
    },
    {
        label: $t('nav-bespoke'),
        to: '/bespoke',
    },
    {
        label: $t('nav-about'),
        to: '/about',
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