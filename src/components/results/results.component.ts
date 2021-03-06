import {Component} from '@angular/core';
import {EHotelService} from "../../services/ehotel.service";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {IterableObjectPipe} from '../../pipes/iterableObject.pipe';
import {HotelListItem} from './hotel-list-item.component';

@Component({
    selector: 'results-component',
    directives: [
        ...ROUTER_DIRECTIVES,
        HotelListItem,
    ],
    styles: [require('./results.component.scss')],
    template: `
<h1>We have found {{countFound}} hotels matching your inquiry</h1>
<div class="list list--default">
  <hotel-list-item *ngFor="let hotel of hotels" [hotel]="hotel"></hotel-list-item>
</div>`,
    pipes: [IterableObjectPipe]
})
export class Results {
    hotels:any;
    countFound:number;

    err:any;

    subscription:any;

    constructor(private hotelService:EHotelService, private router:Router) {
    }

    ngOnInit() {
        this.subscription = this.router
            .routerState
            .queryParams
            .subscribe((params) => {
                this.hotelService.findQuery(params).subscribe(
                    results => {
                        this.hotels = results;
                        this.countFound = this.hotels.length;
                    },
                    error => this.err = <any>error
                );
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
