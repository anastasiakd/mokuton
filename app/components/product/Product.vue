<script setup lang="ts">
import {numberUtils} from '#shared/utils';

const {formatPrice} = numberUtils;

const {product} = defineProps({
    product: {
        type: Object as PropType<ProductDetail>,
        required: true,
    },
});

const basketStore = useBasketStore();
const {
    add: addToBasket,
} = basketStore;

function onBuy() {
    addToBasket(product);
    navigateTo({name: 'basket'});
}
</script>

<template>
    <div
        v-if="product"
        class="product__container"
    >
        <div class="product__header">
            <h1>
                {{ product.name }}
            </h1>

            <hr>
        </div>

        <div class="pt-8 pb-8">
            <div class="product__gallery">
                <UCarousel
                    v-slot="{ item }"
                    :items="product.images"
                    dots
                    :ui="{item: 'basis-auto'}"
                    class="w-full mx-auto"
                >
                    <img
                        :src="item"
                        class="rounded-lg w-120 h-90"
                    >
                </UCarousel>
            </div>
        </div>

        <div class="product__content pt-8 pb-8">
            <div class="product__description">
                <p>
                    {{ product.description }}
                </p>

                <template v-if="product.suits?.length">
                    <p>
                        {{ $t('catalog_product-suits') }}
                    </p>

                    <ul>
                        <li
                            v-for="(suitItem, index) in product.suits"
                            :key="index"
                        >
                            {{ suitItem }}
                        </li>
                    </ul>
                </template>
            </div>

            <div class="product__purchase">
                <h1>
                    {{ formatPrice(product.price) }}
                </h1>

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
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.product {
    &__container {
        grid-column: 2;
    }

    &__header {
        display: grid;
        grid-template-columns: minmax(1.5rem, 1fr) repeat(2, minmax(0, 34.375em)) minmax(1.5rem, 1fr);

        h1 {
            grid-column: 2;
            grid-row: 1;
        }

        hr {
            grid-column: 2 / span 2;
            grid-row: 3;
            margin: 1.5rem 0 0 0;
        }
    }

    &__content {
        display: grid;
        grid-column: 2;
        grid-template-columns: minmax(0, 51.56em) 2rem minmax(0, 25%);

        ul {
            list-style: disc;
            margin: 0 0 0 1.5rem;
            padding-left: 0;
        }
    }

    &__purchase {
        grid-column: 3;
        justify-self: end;
        text-align: right;
    }
}
</style>