import {Component} from '@angular/core';

import {NgForm} from '@angular/forms';
import {HotelSearch} from '../../models/hotel-search';

@Component({
    selector: 'search-component',
    template: `
      <div>
        <h1>Do search hotel!!!!!</h1>
        <form (submit)="onSubmit()">
          <div class="input-group">
            <label for="place">place</label>
            <input name="place" type="text" [(ngModel)]="model.place" />
          </div>
          <div class="input-group">
            <label for="checkin">Check In</label>
            <input name="checkin" type="datetime-local" [value]="model.getCheckinString()" [(ngModel)]="model.checkin" />
          </div>
          <div class="input-group">
            <label for="checkout">Check Out</label>
            <input name="checkout" type="datetime-local" [value]="model.getCheckoutString()" [(ngModel)]="model.checkout" />
          </div>
          <button [disabled]="!model.validate()" type="submit">SEARCH!!</button>
        </form>
      </div>
    `
})
export class Search {
  model = HotelSearch.initByStoredSettings();

  desabled = true;

  onSubmit() {
    console.log(this.model);
    // TODO: Jump to results
  }
}
