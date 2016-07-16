import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EHotelService } from '../../services/ehotel.service';
import { HotelRating } from '../hotelRating/hotelRating.component';
import { RoomInfo } from '../roomInfo/roomInfo.component';


@Component({
    selector: 'detail-component',
    templateUrl: 'src/components/detail/detail.component.html',
    directives: [ HotelRating, RoomInfo ]
})
export class Detail {
	public hotel: any;
	public rooms: any;
	private sub: any;


	constructor( 
		private route: ActivatedRoute, 
		private router: Router,
		private hotelService: EHotelService ) {}

	ngOnInit() {
		this.sub = this.route.params.subscribe( ( params ) => {
			let hotelApiKey = params['id'];

			this.hotelService.find( hotelApiKey ).subscribe( ( response ) => {
				if( response.found === true ) {
					this.hotel = response.hotel;
					this.rooms = response.rooms;
				}
			});
		});
	}

	ngOnDestroy() {
    	this.sub.unsubscribe();
    }

    public goToSearchResults() {
    	this.router.navigate( ['/results'] );
    }

    public arrayKeys( obj ) {
    	return Object.keys( obj );
    }
}
