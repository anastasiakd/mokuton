<script setup lang="ts">
const basketStore = useBasketStore();
const {
    items: products,
    isEmpty,
} = storeToRefs(basketStore);
</script>

<template>
    <div class="basket-container">
        <Basket
            v-if="!isEmpty"
            :products="products"
        />
    </div>
</template>

<style lang="scss" scoped>
.basket {
    &-container {
        grid-column: 2;
    }
}
</style>