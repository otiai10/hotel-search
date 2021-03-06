import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {IterableObjectPipe} from '../../pipes/iterableObject.pipe';

@Component({
  selector: 'hotel-list-item',
  styles: [require('./results.component.scss')],
  pipes: [IterableObjectPipe],
  template: `
    <div class="grid__col--4">
      <div class="hotel__card" [ngClass]="{disabled: !hotel.api_key}" (click)="onClick()">
        <h2>{{hotel.name}}<span class="hotel__stars">{{hotel.stars}}</span></h2>
        <div style="display: flex;">
          <div style="flex: 1;">
            <div class="hotel__city">{{hotel.address_city}}</div>
            <div class="hotel__rooms">
                <div *ngFor="let room of (hotel.min_price_room | iterableObject)" class="hotel__room">
                    <div class="hotel__room-name">{{room.name}}</div>
                    <div class="hotel__room-price">{{room.price}}</div>
                </div>
            </div>
          </div>
          <div style="flex: 1;">
            <img src={{getImageURL()}} width="100px" />
          </div>
        </div>
      </div>
    </div>
  `
})
export class HotelListItem {
  @Input() hotel: any;

  constructor(private router: Router) {}

  onClick() {
    if (!this.hotel.api_key) return;
    this.router.navigate(['detail', this.hotel.api_key]);
  }

  getImageURL() {
    return `https://www.ehotel.cz/images_hotels/normal/${this.hotel.profile_image}.jpg`
  }
}
