class CarsController {
    private request: any;
    private sid: string;

  
    constructor(request: any, sid: string) {
        this.request = request;
        this.sid = sid;
    }

    async createCar(carBrandId: number, carModelId: number, mileage: number) {
    async createCar(data: { carBrandId: number; carModelId: number; mileage: number }) {
        return await this.request.post('/api/cars', {
            headers: {
            'Cookie': `sid=${this.sid}`,
            'Content-Type': 'application/json'
        },
            data: {
            'carBrandId': carBrandId,
            'carModelId': carModelId,
            'mileage': mileage
        }
        });
    }
}

            carBrandId: data.carBrandId,
            carModelId: data.carModelId,
            mileage: data.mileage
        }
        });
    }
}
  
export default CarsController;