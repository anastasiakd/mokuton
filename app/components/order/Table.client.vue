<script setup lang="ts">
import type {TableColumn} from '@nuxt/ui';
import {numberUtils} from '#shared/utils';

const emit = defineEmits(['loaded']);

const isExpandedOrder = ref(false);

const basketStore = useBasketStore();
const {
    pending,
    products,
    totalPrice,
} = storeToRefs(basketStore);

onMounted(async () => {
    await basketStore.init();

    if (products.value.length === 0) {
        navigateTo({name: 'basket'});
    }

    if (!pending.value) {
        emit('loaded');
    }
});

watch(pending, newPending => {
    if (!newPending) {
        emit('loaded');
    }
});

const columns: TableColumn<BasketProduct>[] = [
    {
        accessorKey: 'product',
        header: $t('basket_table-column_product'),
        cell: ({row}) => {
            return h('div', {class: 'flex items-center gap-3'}, [
                h('img', {
                    src: row.original.icon,
                    class: 'max-w-30',
                }),
                h('div', {}, [
                    h('h3', {class: 'basket-product-title'}, row.original.name),
                ]),
            ]);
        },
    },
    {
        accessorKey: 'price',
        header: $t('basket_table-column_price'),
        cell: ({row}) => numberUtils.formatPrice(row.original.price)
    },
    {
        accessorKey: 'count',
        header: $t('basket_table-column_count'),
        cell: ({row}) => row.original.count,
    },
    {
        accessorKey: 'subtotal',
        header: $t('basket_table-column_subtotal'),
        cell: ({row}) => {
            return numberUtils.formatPrice({
                amount: row.original.price.amount * row.original.count,
                currency: row.original.price.currency,
            });
        },
        footer: () => {
            return numberUtils.formatPrice(totalPrice.value);
        },
    },
];
</script>

<template>
    <div class="p-6 mb-6 order-panel">
        <UCollapsible
            v-model:open="isExpandedOrder"
            class="flex flex-col gap-2 w-full"
        >
            <div class="flex justify-between items-baseline cursor-pointer order-panel-title">
                <h3>{{ $t('order_table-title') }}</h3>

                <UIcon
                    :name="`${isExpandedOrder ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'}`"
                    class="size-5"
                />
            </div>

            <template #content>
                <UTable
                    :data="products"
                    :columns="columns"
                    class="flex-1 order-panel-content"
                />
            </template>
        </UCollapsible>
    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/abstracts/mixins" as *;

.order-panel {
    @include collapsible-panel;
}
</style>