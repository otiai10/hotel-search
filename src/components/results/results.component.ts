import {Component} from '@angular/core';
import {EHotelService} from "../../services/ehotel.service";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {IterableObjectPipe} from '../../pipes/iterableObject.pipe';

@Component({
    selector: 'results-component',
    directives: [
        ...ROUTER_DIRECTIVES,
    ],
    styles: [require('./results.component.scss')],
    template: `
<h1>We have found {{countFound}} hotels matching your inquiry</h1>
<div class="list list--default">
    <div *ngFor="let hotel of hotels" class="hotel__card" [routerLink]="['/detail', hotel.api_key]">
        <h2>{{hotel.name}}<span class="hotel__stars">{{hotel.stars}}</span></h2>
        <div class="hotel__city">{{hotel.address_city}}</div>
        <div class="hotel__rooms">
            <div *ngFor="let room of (hotel.min_price_room | iterableObject)" class="hotel__room">
                <div class="hotel__room-name">{{room.name}}</div>
                <div class="hotel__room-price">{{room.price}}</div>
            </div>
        </div>
    </div>
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
