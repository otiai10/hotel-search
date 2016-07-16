import {Component} from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2/angularfire2";

@Component({
    selector: 'results-component',
    styles: [ require('./results.component.scss')],
    template: `
        <h1>Hotel Search!!!!!</h1>
        `
    //     <div *ngFor="let hotel of hotels | async">
    //         {{hotel.name}}
    //     </div>
    // `
})
export class Results {
    // hotels: FirebaseListObservable<any[]>;

    constructor(af: AngularFire) {
        // this.hotels = af.database.list('/hotels');
    }
}
