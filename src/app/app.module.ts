/* Bruna Vieira A00985171 */ 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';
import { MyRemoteService } from './app.myremoteservice';
import { MainComponent } from "./app.main";
import { CalculatorComponent } from "./app.calculator";
import { TemperatureComponent } from "./app.temperature";
import { FoodComponent } from "./app.food";
import { FooddetailsComponent } from "./app.fooddetails";
import { FeedbackComponent } from "./app.feedback";

@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    CalculatorComponent,
    TemperatureComponent,
    FoodComponent,
    FooddetailsComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule, 
    HttpModule, 
    FormsModule, 
    routing
  ],
  providers: [MyRemoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
