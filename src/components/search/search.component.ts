import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {NgForm} from '@angular/forms';
import {HotelSearch} from '../../models/hotel-search';

@Component({
    selector: 'search-component',
    styles: [
      require('./search.component.scss')
    ],
    template: `
      <div class='grid__col--12'>
        <h1>Do search hotel!!!!!</h1>
        <form (submit)="onSubmit()">
          <div class="input-group">
            <label class="grid__col--3" for="place">place</label>
            <input class="grid__col--9" name="place" type="text" [(ngModel)]="model.place" />
          </div>
          <div class="input-group">
            <label class="grid__col--3" for="checkin">Check In</label>
            <input class="grid__col--9" name="checkin" type="datetime-local" [value]="model.getCheckinString()" [(ngModel)]="model.checkin" />
          </div>
          <div class="input-group">
            <label class="grid__col--3" for="checkout">Check Out</label>
            <input class="grid__col--9" name="checkout" type="datetime-local" [value]="model.getCheckoutString()" [(ngModel)]="model.checkout" />
          </div>
          <div class="input-group">
            <div class="grid__col--3">Facilities</div>
            <div class="grid__col--9">
              <label *ngFor="let box of model.facilities" class="display--block">
                <input type="checkbox" [(ngModel)]="box.state">{{box.label}}
              </label>
            </div>
          </div>
          <ul class="errors">
            <li *ngFor="let error of model.validate()">
              <span class="grid__col--3">{{error.label}}:</span>
              <span class="grid__col--9">{{error.message}}</span>
            </li>
          </ul>
          <div class="input-group">
            <button [disabled]="model.validate().length" type="submit">SEARCH!!</button>
          </div>
        </form>
      </div>
    `
})
export class Search {
  model = HotelSearch.initByStoredSettings();

  constructor(public router: Router) {}

  onSubmit() {
    this.router.navigate(['results'], { queryParams: this.model.toParams() });
  }
}
