import {Component} from '@angular/core';
import {FoodService} from './app.foodService';
import {FoodItem} from './app.foodItem';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  templateUrl: 'fooddetails.html',
  styleUrls: ['./app.component.css']
})
export class FooddetailsComponent {
  foodItem: FoodItem;

  constructor(private route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      let ID: number = params['id'] - 1;
      let fooditems: FoodItem[] = FoodService.getFoodItem();
      this.foodItem = fooditems[ID];
    });
  }
}
