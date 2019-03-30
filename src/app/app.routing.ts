/* Bruna Vieira A00985171 */ 

import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { MainComponent } from "./app.main";
import { CalculatorComponent } from "./app.calculator";
import { TemperatureComponent } from "./app.temperature";
import { FeedbackComponent } from "./app.feedback";
import { FoodComponent } from "./app.food";
import { FooddetailsComponent} from './app.fooddetails';

const appRoutes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'temperature', component: TemperatureComponent },
    { path: 'feedback', component: FeedbackComponent }, 
    { path: 'food', component: FoodComponent },
    { path: 'detail/:id', component: FooddetailsComponent},
    { path: '', redirectTo: '/main', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);