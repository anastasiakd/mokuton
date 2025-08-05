import type {Price} from './Price';

export type BasketProduct = {
    id: string;
    name: string;
    price: Price;
    icon: string,
    count: number,
};
