
import { Car } from './car.model';
import { Subject } from 'rxjs/Subject';

export class CarService {
  startedEditing = new Subject<number>();

  private cars: Car[] = [
    new Car('make', 'model', 'details', 'color'),
    new Car('Honda', 'Civic', 'an ok car', 'gold'),
    new Car('Subaru', 'Outback', 'meh car', 'light blue'),
    new Car('Lambo', 'Murcielago', 'supercar', 'red')
  ];

  getCars() {
    return this.cars;
  }

  getCar(index: number) {
    return this.cars[index];
  }

  addCar(car: Car) {
    console.log(this.cars);
    this.cars.push(car);
  }
}
