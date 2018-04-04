
import { Car } from './car.model';

export class CarService {
  private cars: Car[] = [
    new Car('make', 'model', 'details', 'color'),
    new Car('Honda', 'Civic', 'an ok car', 'gold'),
    new Car('Subaru', 'Outback', 'meh car', 'light blue'),
    new Car('Lambo', 'Murcielago', 'supercar', 'red')
  ];

  getCars() {
    return this.cars;
  }
  addCar(car: Car) {
    console.log(this.cars);
    this.cars.push(car);
  }
}
