<script setup lang="ts">
const pending = ref(true);

function finishPending() {
    pending.value = false;
}

const toast = useToast();

async function submitOrder(customer) {
    toast.add({
        title: 'Ваш заказ принят',
        description: `Скоро с вами свяжется наш менеджер. Подтверждение заказа отправлено на ${customer.email}.`,
        color: 'success',
        progress: false,
    });

    useOrderStore().submitOrder({customer});
    navigateTo({name: 'product-catalog'});
}
</script>

<template>
    <div class="order-container pt-8">
        <BaseSpinner v-if="pending"/>

        <OrderTable
            @loaded="finishPending"
        />

        <OrderCustomer
            v-if="!pending"
            @order:submit="submitOrder"
        />
    </div>
</template>

<style lang="scss" scoped>
.order-container {
    grid-column: 2;
}
</style>