import {test, expect} from '@playwright/test';

test('model catalog: loaded', async ({page}) => {
    await page.goto('http://localhost:3000/model/catalog');
    await expect(page.getByTestId('models-catalog')).toBeVisible();
});

test('model catalog: click on model (table)', async ({ page }) => {
    await page.goto('http://localhost:3000/model/catalog');
    await page.getByTestId('catalog-model-table').click();
    await expect(page.getByTestId('model-detail-table')).toBeVisible();
});
