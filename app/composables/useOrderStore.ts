import {defineStore} from 'pinia';

export const useOrderStore = defineStore('order', () => {
    const basketStore = useBasketStore();
    const sendEmail = useSendEmail();

    function submitOrder({customer}) {
        sendEmail.send({
            to: 'mokuton-wd@yandex.ru',
            subject: 'Mokuton Wood Design: новый заказ',
            data: JSON.stringify({customer, order: basketStore.products}),
        });

        sendEmail.send({
            to: customer.email,
            subject: 'Mokuton Wood Design: новый заказ',
            data: 'Спасибо за заказ! Скоро с вами свяжется наш менеджер.',
        });

        basketStore.clear();
    }

    return {
        submitOrder,
    };
});