import { Component, Input } from '@angular/core';


@Component({
    selector: 'hotel-rating',
    templateUrl: 'src/components/hotelRating/hotelRating.component.html'
})
export class HotelRating {
	@Input() rating: number;
	public stars: Array<any>;


	constructor() {}

	ngOnInit() {
		this.stars = new Array( this.rating );
	}
}
