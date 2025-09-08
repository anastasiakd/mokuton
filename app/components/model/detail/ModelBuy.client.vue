<script setup lang="ts">
const {model} = defineProps({
    model: {
        type: Object as PropType<ProductDetail>,
        required: true,
    },
});

const basketStore = useBasketStore();
const {
    addProduct: addToBasket,
} = basketStore;

function onBuy() {
    addToBasket(model);
    navigateTo({name: 'basket'});
}
</script>

<template>
    <UButton
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