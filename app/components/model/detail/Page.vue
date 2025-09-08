<script setup lang="ts">
const {id} = defineProps({
    id: {
        type: String,
        required: true,
    },
});

const catalogStore = useCatalogStore();
const {
    getProduct,
} = catalogStore;

const product = ref();

getProduct(id)
    .then(result => {
        product.value = result;
    });
</script>

<template>
    <Model
        v-if="product"
        :product="product"
    />
</template>

<style scoped>
</style>