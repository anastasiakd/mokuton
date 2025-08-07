import {defineStore} from 'pinia';
import {currencyUtils} from '#shared/utils';

export const useBasketStore = defineStore('basket', () => {
    const basketStorage = useBasketStorage();
    const {basketStorageItems} = basketStorage;

    const pending = ref<boolean>(true);
    const products = ref<BasketProduct[]>([]);

    const isEmpty = computed(() => basketStorageItems.value.length === 0);

    const count = computed(() => (
        basketStorageItems.value.reduce((result, item) => {
            result += item.count;
            return result;
        }, 0)
    ));

    const totalPrice: Ref<Price> = computed(() => {
        const totalAmount = products.value
            .reduce((total, item) => {
                total += item.price.amount * item.count;
                return total;
            }, 0);

        const totalCurrency = currencyUtils.getLocalizedCurrency(
            useLocale().locale.value.code,
        );

        return {
            amount: totalAmount,
            currency: totalCurrency?.code,
        };
    });

    function setProductCount(product: BasketProduct, count: number) {
        const basketProduct = products.value.find(item => item.id === product.id);
        if (basketProduct) {
            basketProduct.count = count;
        }

        basketStorage.setProductCount(product, count);
    }

    function addProduct(product: CatalogProduct) {
        const basketProduct = products.value.find(item => item.id === product.id);
        if (basketProduct) {
            // В корзине уже есть такой товар => увеличиваем количество
            basketProduct.count += 1;
        } else {
            // Нет в корзине такого товара => добавляем
            products.value.push({...product, count: 1});
        }

        basketStorage.addProduct(product);
    }

    function removeProduct(product: BasketProduct) {
        const productIndex = products.value.findIndex(item => item.id === product.id);
        if (productIndex >= 0) {
            products.value.splice(productIndex, 1);
        }

        basketStorage.removeProduct(product);
    }

    async function getProduct(id: string) {
        return await $fetch<ProductDetail>(useRequestQuery(`/api/product/${id}`));
    }

    async function init() {
        pending.value = true;
        products.value = [];

        for (let i = 0; i < basketStorageItems.value.length; i += 1) {
            const storedItem = basketStorageItems.value[i];
            if (storedItem) {
                const product = await getProduct(storedItem.id);
                if (product) {
                    products.value.push({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        icon: product.icon,
                        count: storedItem.count,
                    });
                }
            }
        }

        pending.value = false;
    }

    return {
        pending,
        products,
        isEmpty,
        count,
        totalPrice,

        addProduct,
        removeProduct,
        setProductCount,
        init,
    };
});