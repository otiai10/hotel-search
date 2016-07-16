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
    This is our app.

    <a [routerLink]="['./']">Search</a>
    <a [routerLink]="['./results']">Results</a>
    <a [routerLink]="['./detail']">Detail</a>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
