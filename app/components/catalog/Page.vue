<script setup lang="ts">
import {numberUtils} from '~~/shared/utils';

const catalogStore = useCatalogStore();
const {
    items: products,
} = storeToRefs(catalogStore);
const {
    getList,
} = catalogStore;

function formatPrice(price: number) {
    return `${numberUtils.formatPrice(price)} ₽`;
}

function goToProduct(product: CatalogItem) {
    navigateTo({
        name: 'catalog-product-id',
        params: {id: product.id},
    });
}

getList();
</script>

<template>
    <div class="products-container">
        <div class="products-catalog">
            <ul class="products columns-3">
                <li
                    v-for="product in products"
                    :key="product.id"
                    class="product cursor-pointer"
                    @click="goToProduct(product)"
                >
                    <div>
                        <img
                            :src="product.icon"
                            alt="MOKUTON wood design"
                            class="block"
                        >
                    </div>

                    <h3 class="mt-2 mb-2">
                        <span class="product-title">
                            {{ product.name }}
                        </span>
                    </h3>

                    <div>
                        {{ formatPrice(product.price) }}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/abstracts/variables" as *;

.products {
    grid-template-columns: repeat(auto-fill, minmax(29%, 1fr));

    &-container {
        grid-column: 2;
    }

    &-catalog {
        grid-column: 1 / span 3;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, minmax(min-content, max-content));

        ul.products {
            grid-column: 1 / span 3;
            display: grid;
            grid-auto-rows: auto;
            grid-gap: 2rem;
            grid-auto-flow: row;

            li.product {
                width: 100%;

                img {
                    width: 100%;
                }
            }

            .product {
                &-title {
                    border-bottom: 2px solid $accent-color;
                    transition: all 0.25s ease-out;

                    &:hover {
                        background-color: $accent-bg;
                    }
                }
            }
        }
    }
}
</style>