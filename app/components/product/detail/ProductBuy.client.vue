<script setup lang="ts">
const {product} = defineProps({
    product: {
        type: Object as PropType<ProductDetail>,
        required: true,
    },
});

const basketStore = useBasketStore();
const {
    addProduct: addToBasket,
} = basketStore;

function onBuy() {
    addToBasket(product);
    navigateTo({name: 'basket'});
}
</script>

<template>
    <UButton
        data-testid="'button-buy'"
        trailing-icon="i-lucide-arrow-right"
        size="xl"
        block
        square
        class="cursor-pointer mt-2"
        @click="onBuy"
    >
        {{ $t('button-buy') }}
    </UButton>
</template>

<style scoped>

</style>