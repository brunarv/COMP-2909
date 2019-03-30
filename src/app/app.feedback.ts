/* Bruna Vieira A00985171 */ 

import { Component }      from '@angular/core';
import {  MyRemoteService } from './app.myremoteservice';

// This component consumes the re-usable service.
@Component({
    templateUrl: 'feedback.html'
})
export class FeedbackComponent {
    emailAddress: string;
    feedbackMsg: string;
    feedbackResponseMsg: string;
    feedbackResponseStatus: string;
    formSubmitted: boolean;

    constructor(private remoteService: MyRemoteService)
    {}

    submitForm(inputEmailValid: boolean, inputMsgValid: boolean) {
        this.formSubmitted = true;
        if(inputEmailValid && inputMsgValid) {
            this.postFeedback();
            this.emailAddress = "";
            this.feedbackMsg = "";
            this.formSubmitted = false;
        } else {
            console.log("Invalid email")
        }
    }

    postFeedback() {
        // Create the JavaScript object in the format
        // required by the server.
        let FeedBackObject = {
            "Email": this.emailAddress,
            "Message": this.feedbackMsg
        }

        this.remoteService.postName(FeedBackObject)
        // Subscribe to observable.
            .subscribe(

                // Success.
                data => {
                    this.feedbackResponseMsg    = data["Message"];
                    this.feedbackResponseStatus = data["Status"];
                    console.log(data)
                },
                // Error.
                error => {
                    alert(error)
                },
                // Final instructions.
                () => {
                    console.log("Finished")
                });
    }
}