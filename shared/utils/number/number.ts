import type {Price} from '#shared/types/Price';

const formatPrice = (price: Price) => {
    if (!price) {
        return null;
    }

    const formattedAmount = price.amount
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return `${formattedAmount} ${price.unit}`;
};

export default {
    formatPrice,
};
