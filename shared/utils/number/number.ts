import type {Price} from '#shared/types/Price';
import currency from '../currency';

const formatPrice = (price: Price) => {
    if (!price) {
        return null;
    }

    const formattedAmount = price.amount
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    const formattedCurrency = currency.getCurrencySign(price.currency);

    return `${formattedAmount} ${formattedCurrency}`;
};

export default {
    formatPrice,
};
