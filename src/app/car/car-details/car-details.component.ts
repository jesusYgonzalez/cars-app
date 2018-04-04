import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.cars = this.carService.getCars();
  }

}
