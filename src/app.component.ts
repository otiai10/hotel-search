import {Component, ViewEncapsulation} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import { EHotelService } from './services/ehotel.service';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    directives: [
        ...ROUTER_DIRECTIVES,
    ],
    styles: [
        require('./scss/base.scss')
    ],
    providers: [EHotelService],
    template: `
    <div class="grid__container">
    This is our app.

    <a [routerLink]="['./']">Search</a>
    <a [routerLink]="['./results']">Results</a>
    <a [routerLink]="['/detail', 'c789de43bbc0']">Detail</a>

    <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
}
