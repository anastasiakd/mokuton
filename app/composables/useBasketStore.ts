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

    function incrementProduct(basketProduct: BasketProduct) {
        basketProduct.count += 1;
    }

    function decrementProduct(basketProduct: BasketProduct) {
        basketProduct.count -= 1;
    }

    function setProductCount(product: BasketProduct, count: number) {
        const basketProduct = items.value.find(item => item.id === product.id);
        if (basketProduct) {
            basketProduct.count = count;
        }
    }

    function add(product: CatalogProduct) {
        const basketProduct = items.value.find(item => item.id === product.id);
        if (basketProduct) {
            // В корзине уже есть такой товар => увеличиваем количество
            incrementProduct(basketProduct);
        } else {
            // Нет в корзине такого товара => добавляем
            items.value.push({...product, count: 1});
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
        incrementProduct,
        decrementProduct,
        setProductCount,
    };
});