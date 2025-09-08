<script setup lang="ts">
const route = useRoute();
const productId: string = route.params.id as string;
</script>

<template>
    <ProductDetailPage
        :id="productId"
    />
</template>
