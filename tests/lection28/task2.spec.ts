import { test, expect, Locator } from '@playwright/test';
import { mainUserEmail, mainUserPassword } from '../../test-data/credentials';
import AuthController from '../../api-controllers/AuthController';
import CarsController from '../../api-controllers/CarsController';

test.describe('Task2', () => {
    let carsController: CarsController;
    let sid: string;

    test.beforeAll(async ({ request }) => {
        const authController = new AuthController(request);
        sid = await authController.signInAndGetCookies(mainUserEmail, mainUserPassword);
    })

    test.beforeEach(async ({ request }) => {
        carsController = new CarsController(request, sid);
      });

    test('test1', async () => {
        const response = await carsController.createCar({
            carBrandId: 1,
            carModelId: 5,
            mileage: 15000
        });
        const body = await response.json();
        expect(response.status()).toBe(201);
        expect(body.data.brand).toEqual('Audi');
    });
    
    test('test2', async () => {
        const response = await carsController.createCar({
            carBrandId: 2,
            carModelId: 11,
            mileage: 15000
        });
        const body = await response.json();
        expect(response.status()).toBe(404);
        expect(body.message).toContain('Model not found');
    });
    
    test('test3', async () => {
        const response = await carsController.createCar({
            carBrandId: 3,
            carModelId: 13,
            mileage: 1000000
        });
        const body = await response.json();
        expect(response.status()).toBe(400);
        expect(body.message).toContain('Mileage has to be from 0 to 999999');
    });
});