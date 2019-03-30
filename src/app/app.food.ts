import {Component} from '@angular/core';
import {FoodService} from './app.foodService';
import {FoodItem} from './app.foodItem';

@Component({
  templateUrl: 'food.html',
  styleUrls: ['./app.component.css']
})
export class FoodComponent {
  foodItems: FoodItem[] = FoodService.getFoodItem();
}
