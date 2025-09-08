<script setup lang="ts">
import Product from './Product.vue';

const {id} = defineProps({
    id: {
        type: String,
        required: true,
    },
});

const productStore = useProductStore();
const {
    getProduct,
} = productStore;

const product = ref();

getProduct(id)
    .then(result => {
        product.value = result;
    });
</script>

<template>
    <Product
        v-if="product"
        :product="product"
    />
</template>

<style scoped>
</style>