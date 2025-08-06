<script setup lang="ts">
import type {TableColumn} from '@nuxt/ui';
import {numberUtils} from '#shared/utils';

const UInputNumber = resolveComponent('UInputNumber');

const basketStore = useBasketStore();
const {
    items: products,
    isEmpty,
} = storeToRefs(basketStore);
const {
    setProductCount,
} = basketStore;

function goToCatalogProduct(basketProduct: BasketProduct) {
    navigateTo({
        name: 'catalog-product-id',
        params: {id: basketProduct.id},
    });
}

const columns: TableColumn<BasketProduct>[] = [
    {
        accessorKey: 'product',
        header: $t('basket-table-column-product'),
        cell: ({row}) => {
            return h('div', {class: 'flex items-center gap-3'}, [
                h('img', {
                    src: row.original.icon,
                    class: 'max-w-37 cursor-pointer block-highlight',
                    onClick: () => goToCatalogProduct(row.original),
                }),
                h('div', {
                    class: 'text-highlight cursor-pointer',
                    onClick: () => goToCatalogProduct(row.original),
                }, [
                    h('h3', {class: 'basket-product-title'}, row.original.name),
                ]),
            ]);
        },
    },
    {
        accessorKey: 'price',
        header: $t('basket-table-column-price'),
        cell: ({row}) => numberUtils.formatPrice(row.original.price)
    },
    {
        accessorKey: 'count',
        header: '',
        cell: ({row}) => {
            return h('div', {class: ''}, [
                h(UInputNumber, {
                    modelValue: row.original.count,
                    min: 1,
                    orientation: 'vertical',
                    color: 'neutral',
                    variant: 'soft',
                    'onUpdate:modelValue': (newCount: number) => {
                        setProductCount(row.original, newCount);
                    },
                }),
            ]);
        },
    },
    {
        accessorKey: 'subtotal',
        header: $t('basket-table-column-subtotal'),
        cell: ({row}) => {
            return numberUtils.formatPrice({
                amount: row.original.price.amount * row.original.count,
                unit: row.original.price.unit,
            });
        }
    },
];
</script>

<template>
    <UTable
        v-if="!isEmpty"
        :data="products"
        :columns="columns"
        class="flex-1"
    />

    <div v-else>
        Корзина пуста
    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/abstracts/variables" as *;

.basket-container {
    h3 {
        border-bottom: 2px solid $accent-color;
        transition: all 0.25s ease-out;

        &:hover {
            background-color: $accent-bg;
        }
    }
}
</style>
