import type {Price} from './Price';

export type ProductDetail = {
    id: string;
    name: string;
    price: Price;
    icon: string,
    images: Array<string>,
    description: string;
    suits: Array<string>,
};
