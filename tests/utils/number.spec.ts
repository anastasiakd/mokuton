import {expect, test} from '@playwright/test';
import {numberUtils} from '../../shared/utils';

test('toFixedNumber(100 \'RUB\') = \'100 ₽\'', () => {
    expect(numberUtils.formatPrice({amount: 100, currency: 'RUB'})).toBe('100 ₽');
});

test('toFixedNumber(1000 \'USD\') = \'1 000 $\'', () => {
    expect(numberUtils.formatPrice({amount: 1000, currency: 'USD'})).toBe('1 000 $');
});
