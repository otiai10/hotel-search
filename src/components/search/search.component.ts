import {Component} from '@angular/core';

import {NgForm} from '@angular/forms';
import {HotelSearch} from '../../models/hotel-search';

@Component({
    selector: 'search-component',
    template: `
      <div>
        <h1>Do search hotel!!!!!</h1>
        <form (submit)="onSubmit()">
          <input type="text" [(ngModel)]="model.keyword" />
          <input type="datetime" [(ngModel)]="model.dateFrom" />
          <input type="datetime" [(ngModel)]="model.dateTo" />
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
    debugger;
  }
}
