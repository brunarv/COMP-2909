/* Bruna Vieira A00985171 */ 

import { Component }      from '@angular/core';
import {  MyRemoteService } from './app.myremoteservice';

// This component consumes the re-usable service.
@Component({
    templateUrl: 'temperature.html'
})
export class TemperatureComponent {
    celsius: number;
    fahrenheit: number;

    //variables to show the response
    returnedCelsius: number;
    returnedFahrenheit: number;
    displayedCelsius: number;
    displayedFahrenheit: number;

    //form submission boolean
    celsiusFormSubmitted: boolean;
    fahrenheitFormSubmitted: boolean;

    constructor(private remoteService: MyRemoteService)
    {}

    processData(data: Array<any>) {
        if(data["Celsius"]) {
            this.returnedCelsius = data["Celsius"];
            this.displayedFahrenheit = this.fahrenheit;
        } else if(data["Fahrenheit"]) {
            this.returnedFahrenheit = data["Fahrenheit"];
            this.displayedCelsius = this.celsius;
        }
    }

    submitCelsius(valid: boolean) {
        this.celsiusFormSubmitted = true;
        if(valid) {
            this.convertToF(this.celsius);
        }
    }

    submitFahrenheit(valid: boolean) {
        this.fahrenheitFormSubmitted = true;
        if(valid) {
            this.convertToC(this.fahrenheit);
        }
    }

    convertToC(fahrenheit: number) {
        this.remoteService.getCelsius(fahrenheit)

        // Subscribe to observable.
            .subscribe(
                // Success.
                data => {
                    this.processData(data);
                },
                // Error.
                error => {
                    //alert(error)
                },
                // Final Instructions.
                () => {
                    console.log("Finished")
                });

    }

    convertToF(celsius: number) {
        this.remoteService.getFahrenheit(celsius)
        // Subscribe to observable.
            .subscribe(
                // Success.
                data => {
                    this.processData(data);
                },
                // Error.
                error => {
                    //alert(error)
                },
                // Final Instructions.
                () => {
                    console.log("Finished")
                });
    }
}