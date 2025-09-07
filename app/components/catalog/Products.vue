<script setup lang="ts">
const catalogStore = useCatalogStore();
const {
    filterProducts: products,
} = storeToRefs(catalogStore);
</script>

<template>
    <div class="products-catalog pt-8">
        <ul class="products columns-3">
            <CatalogProductItem
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.products {
    grid-template-columns: repeat(auto-fill, minmax(29%, 1fr));

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
        }
    }
}
</style>