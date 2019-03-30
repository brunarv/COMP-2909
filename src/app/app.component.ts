/* Bruna Vieira A00985171 */ 

import { Component }      from '@angular/core';

// This component consumes the re-usable service.
@Component({
    selector: 'app-root',
    template: ` 
                <nav class="site-nav">
                <ul>
                    <li><a routerLink="/main" routerLinkActive="active">Home</a></li>
                    <li><a routerLink="/calculator" routerLinkActive="active">Calculator</a></li>
                    <li><a routerLink="/temperature" routerLinkActive="active">Temperature</a></li>
                    <li><a routerLink="/food" routerLinkActive="active">Foods</a></li>
                    <li><a routerLink="/feedback" routerLinkActive="active">Feedback</a></li>
                </ul>
            </nav>
            <!-- Where router should display a view -->
            <router-outlet></router-outlet> `,
    // Providers allow us to inject an object instance through the constructor.
    styleUrls: ['app.component.css']
})
export class AppComponent {}