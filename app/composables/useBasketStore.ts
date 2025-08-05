import {defineStore} from 'pinia';
import useUserStorage, {STORAGE_KEYS} from '~/composables/useUserStorage';

export const useBasketStore = defineStore('basket', () => {
    const items = useUserStorage<Array<BasketProduct>>(STORAGE_KEYS.basket, []);
    const isEmpty = computed(() => items.value.length === 0);
    const count = computed(() => (
        items.value.reduce((result, item) => {
            result += item.count;
            return result;
        }, 0)
    ));

    function add(product: CatalogProduct) {
        const productIndex = items.value.findIndex(item => item.id === product.id);
        if (productIndex === -1) {
            // Нет в корзине такого товара => добавляем
            items.value.push({...product, count: 1});
        } else {
            // В корзине уже есть такой товар => увеличиваем количество
            items.value[productIndex].count += 1;
        }
    }

    function remove(product: BasketProduct) {
        const productIndex = items.value.findIndex(item => item.id === product.id);
        if (productIndex >= 0) {
            items.value.splice(productIndex, 1);
        }
    }

    return {
        items,
        count,
        isEmpty,

        add,
        remove,
    };
});