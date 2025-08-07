<script setup lang="ts">
import type {TableColumn} from '@nuxt/ui';
import {numberUtils} from '#shared/utils';

const UInputNumber = resolveComponent('UInputNumber');

const emit = defineEmits(['loaded']);

const basketStore = useBasketStore();
const {
    pending,
    products,
    isEmpty,
    totalPrice,
} = storeToRefs(basketStore);
const {
    init: initBasket,
    setProductCount,
    removeProduct,
} = basketStore;

onMounted(initBasket);

watch(pending, () => emit('loaded'));

function goToCatalogProduct(basketProduct: BasketProduct) {
    navigateTo({
        name: 'catalog-product-id',
        params: {id: basketProduct.id},
    });
}

function goToCatalog() {
    navigateTo({name: 'catalog'});
}

const columns: TableColumn<BasketProduct>[] = [
    {
        accessorKey: 'product',
        header: $t('basket_table-column_product'),
        cell: ({row}) => {
            return h('div', {class: 'flex items-center gap-3'}, [
                h('div', {
                    title: $t('basket_table-button_delete'),
                    class: 'grid bg-neutral-200 w-9 h-9 pb-1 place-content-center rounded-[50%] font-bold cursor-pointer',
                    onClick: () => removeProduct(row.original),
                }, 'x'),
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
        header: $t('basket_table-column_price'),
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
    <section v-if="!pending && !isEmpty">
        <UTable
            :data="products"
            :columns="columns"
            class="flex-1"
        />

        <div class="grid place-content-end mt-4">
            <UButton
                size="xl"
                block
                square
                class="w-auto cursor-pointer mt-1"
                @click="goToCatalog"
            >
                Оформить заказ
            </UButton>
        </div>

        <BasketEmpty v-if="!pending && isEmpty"/>
    </section>
</template>

<style scoped>

</style>