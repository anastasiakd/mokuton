export default () => {
    // В хранилище храним информацию идентификатор товара и его количество в корзине
    const basketStorageItems = useUserStorage<Array<BasketStorageItem>>(STORAGE_KEYS.basket, []);

    function setProductCount(product: BasketProduct, count: number) {
        const basketProduct = basketStorageItems.value.find(item => item.id === product.id);
        if (basketProduct) {
            basketProduct.count = count;
        }
    }

    function addProduct(product: CatalogProduct) {
        const basketProduct = basketStorageItems.value.find(item => item.id === product.id);
        if (basketProduct) {
            // В корзине уже есть такой товар => увеличиваем количество
            basketProduct.count += 1;
        } else {
            // Нет в корзине такого товара => добавляем
            basketStorageItems.value.push({id: product.id, count: 1});
        }
    }

    function removeProduct(product: BasketProduct) {
        const productIndex = basketStorageItems.value.findIndex(item => item.id === product.id);
        if (productIndex >= 0) {
            basketStorageItems.value.splice(productIndex, 1);
        }
    }

    function updateStorage(basketProducts: Array<BasketProduct>) {
        basketStorageItems.value = basketProducts.map(basketProduct => ({
            id: basketProduct.id,
            count: basketProduct.count,
        }));
    }

    return {
        basketStorageItems,
        updateStorage,

        setProductCount,
        addProduct,
        removeProduct,
    };
};
