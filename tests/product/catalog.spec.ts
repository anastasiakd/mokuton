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

test('model detail: add product (table) to basket', async ({ page }) => {
    await page.goto('http://localhost:3000/product/table');
    await expect(page.getByTestId('product-detail-table')).toBeVisible();
    await page.getByTestId('button-buy').click();
    await expect(page.getByTestId('basket-container')).toBeVisible();
    await expect(page.getByTestId('basket-product-table')).toBeVisible();
});
