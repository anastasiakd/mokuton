<script setup lang="ts">
import Order from './Order.vue';

const toast = useToast();
const sendEmail = useSendEmail();

function onOrder(order) {
    toast.add({
        title: 'Ваш заказ принят',
        description: `Скоро с вами свяжется наш менеджер. Подтверждение заказа отправлено на ${order.email}.`,
        color: 'success',
        progress: false,
    });

    sendEmail.send({
        to: 'mokuton-wd@yandex.ru',
        subject: 'Mokuton Wood Design: новый заказ (индивидуальный)',
        data: JSON.stringify({order}),
    });

    sendEmail.send({
        to: order.email,
        subject: 'Mokuton Wood Design: новый заказ',
        data: 'Спасибо за заказ! Скоро с вами свяжется наш менеджер.',
    });
}
</script>

<template>
    <div class="bespoke__container pt-8">
        <Order
            @order:submit="onOrder"
        />
    </div>
</template>

<style lang="scss" scoped>
.bespoke {
    &__container {
        grid-column: 2;
    }
}
</style>