import {FoodItem}from './app.foodItem';

var FOODITEMS: FoodItem[] = [
  {id: 1, name: 'Cucumbers', mfg: 'Hot House', pkg: '10 KG', qty: 6},
  {id: 2, name: 'Carrots', mfg: 'Hot House', pkg: '8 KG', qty: 14},
  {id: 3, name: 'Cheese', mfg: 'Hot House', pkg: '5 KG', qty: 20},
  {id: 4, name: 'French Fries', mfg: 'McCain', pkg: '15 KG', qty: 8}
];

export class FoodService {
  static getFoodItem() {
    return FOODITEMS;
  }
}
