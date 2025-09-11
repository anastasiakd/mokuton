import {expect, test} from '@playwright/test';
import {currencyUtils} from '../../shared/utils';

test('getCurrencySign(\'RUB\') = \'₽\'', () => {
    expect(currencyUtils.getCurrencySign('RUB')).toBe('₽');
});
test('getCurrencySign(\'USD\') = \'$\'', () => {
    expect(currencyUtils.getCurrencySign('USD')).toBe('$');
});

test('getCurrencySign(\'ru\').code = \'RUB\'', () => {
    expect(currencyUtils.getLocalizedCurrency('ru')?.code).toBe('RUB');
});
test('getCurrencySign(\'en\').code = \'USD\'', () => {
    expect(currencyUtils.getLocalizedCurrency('en')?.code).toBe('USD');
});
