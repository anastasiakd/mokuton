import type {Currency} from '#shared/types/Currency';
import type {StringMap} from '#shared/types/StringMap';

const CURRENCY: StringMap<Currency> = {
    USD: {
        code: 'USD',
        sign: '$',
    },
    RUB: {
        code: 'RUB',
        sign: '₽',
    },
};

const getCurrencySign = (currency: string): string => (
    CURRENCY[currency]?.sign || ''
);

const LOCALIZED_CURRENCY: StringMap<Currency> = {
    en: CURRENCY.USD as Currency,
    ru: CURRENCY.RUB as Currency,
};

const getLocalizedCurrency = (locale: string): Currency | undefined => (
    LOCALIZED_CURRENCY[locale]
);

export default {
    getCurrencySign,
    getLocalizedCurrency,
};
