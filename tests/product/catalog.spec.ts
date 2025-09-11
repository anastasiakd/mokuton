import {test, expect} from '@playwright/test';

test('product catalog: loaded', async ({page}) => {
    await page.goto('http://localhost:3000/product/catalog');
    await expect(page.getByTestId('products-catalog')).toBeVisible();
});

test('product catalog: click on product (table)', async ({ page }) => {
    await page.goto('http://localhost:3000/product/catalog');
    await page.getByTestId('catalog-product-table').click();
    await expect(page.getByTestId('product-detail-table')).toBeVisible();
});
