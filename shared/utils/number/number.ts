import type {Price} from '#shared/types/Price';

const formatPrice = (price: Price) => {
    const formattedAmount = price.amount
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return `${formattedAmount} ${price.unit}`;
};

export default {
    formatPrice,
};
