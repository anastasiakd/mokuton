<script setup lang="ts">
import {numberUtils} from '#shared/utils';

const {formatPrice} = numberUtils;

const {product} = defineProps({
    product: {
        type: Object as PropType<CatalogProduct>,
        required: true,
    },
});

function goToProduct() {
    navigateTo({
        name: 'catalog-product-id',
        params: {id: product.id},
    });
}
</script>

<template>
    <li
        class="product cursor-pointer"
        @click="goToProduct"
    >
        <div>
            <img
                :src="product.icon"
                alt="MOKUTON wood design"
                class="block"
            >
        </div>

        <h3 class="mt-2 mb-2">
            <span class="text-highlight">
                {{ product.name }}
            </span>
        </h3>

        <div>
            {{ formatPrice(product.price) }}
        </div>
    </li>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/abstracts/mixins" as *;

.product {
    li {
        width: 100%;

        img {
            width: 100%;
        }
    }
}
</style>