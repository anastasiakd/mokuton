<script setup lang="ts">
import type {TableColumn} from '@nuxt/ui';
import {numberUtils} from '#shared/utils';

const UInputNumber = resolveComponent('UInputNumber');

defineProps({
    products: {
        type: Array<BasketProduct>,
        required: true,
    }
});

const columns: TableColumn<BasketProduct>[] = [
    {
        accessorKey: 'product',
        header: $t('basket-table-column-product'),
        cell: ({row}) => {
            return h('div', {class: 'flex items-center gap-3'}, [
                h('img', {
                    src: row.original.icon,
                    class: 'max-w-37',
                }),
                h('div', undefined, [
                    h('p', {class: 'basket-product-title'}, row.original.name),
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
                    orientation: 'vertical',
                    color: 'neutral',
                    variant: 'soft',
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
        :data="products"
        :columns="columns"
        class="flex-1"
    />
</template>

<style lang="scss" scoped>
@use "~/assets/scss/abstracts/variables" as *;

.basket {
    &-product {
        &-title {
            border-bottom: 2px solid $accent-color;
            transition: all 0.25s ease-out;

            &:hover {
                background-color: $accent-bg;
            }
        }
    }
}
</style>
