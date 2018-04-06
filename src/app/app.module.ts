import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarService } from './car/car.service';
import { CarDetailsComponent } from './car/car-details/car-details.component';
import { CarListComponent } from './car-list/car-list.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CarListEditComponent } from './car-list/car-list-edit/car-list-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarDetailsComponent,
    CarListComponent,
    HeaderComponent,
    CarListEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
