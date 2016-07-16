import { Component, Input } from '@angular/core';


@Component({
    selector: 'room-info',
    templateUrl: 'src/components/roomInfo/roomInfo.component.html'
})
export class RoomInfo {
	@Input() room: any;


	constructor() {}

	ngOnInit() {}
}
