/* BRUNA VIEIRA  - A00985171 */

import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: 'calculator.html',
   styleUrls: ['./app.component.css']
})


export class CalculatorComponent { 

  public number: string;
  public result:number;     
  public firstNumSum:string;   
  public secondNumSum:string;   
  public firstNumDiff:string;   
  public secondNumDiff:string;   
  public firstNumProd:string;   
  public secondNumProd:string; 
  public firstNumQuo:string;  
  public secondNumQuo:string; 
  public sum: string;
  public difference: string;
  public product: string;
  public quotient: string;

  // Calculate Sum of two numbers
  calcSum(){
    var  result = Number(this.firstNumSum) + Number(this.secondNumSum);       
    
    this.sum = `${this.firstNumSum} + ${this.secondNumSum} = ${result}`;
    
    this.firstNumSum = null;
    this.secondNumSum = null;
  }

  // Calculate Difference of two numbers
  calcDiff(){
    var  result = Number(this.firstNumDiff) - Number(this.secondNumDiff);       

    this.difference = `${this.firstNumDiff} - ${this.secondNumDiff} = ${result}`;

    this.firstNumDiff = null;
    this.secondNumDiff = null;

  }

// Calculate Product of two numbers
  calcProduct(){
    var  result = Number(this.firstNumProd) * Number(this.secondNumProd);       

    this.product = `${this.firstNumProd} * ${this.secondNumProd} = ${result}`;

    this.firstNumProd = null;
    this.secondNumProd = null;
  }

  // Quotient Sum of two numbers
  calcQuotient(){
    var  result = Number(this.firstNumQuo)/ Number(this.secondNumQuo);       

    this.quotient = `${this.firstNumQuo} / ${this.secondNumQuo} = ${result.toFixed(2)}`; // digit fixed on 2 digits
  
    this.firstNumQuo = null;
    this.secondNumQuo = null;
  }

  // Clear result if the input value is changed
  reset(){
    this.sum = null;
    this.difference = null;
    this.product = null;
    this.quotient = null;
  }
}