import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EHotelService {

  constructor (private http: Http) { }

  private baseUrl = 'https://crossorigin.me/http://www.ehotel.cz/api';

  /**
   * query object:
   *
   * required:
   * q: place
   *
   * optional:
   * as: [city,area,location] (default: autodetect if empty)
   * r: radius (default: 20 km)
   * check_in: from (format 2016-05-09 i 09-05-2016)
   * check_out: to
   * limit:
   * debug:
   */
  findQuery(query: Object) {
    let search = new URLSearchParams();
    let keys = Object.keys(query);

    for (let key of keys) {
      search.set(key, '' + query[key]);
    }

    return this.http
      .get(this.baseUrl + '/search', { search })
      .map(this.extractData)
  }

  find(id: string) {
    let search = new URLSearchParams();

    search.set('id', id);

    return this.http
      .get(this.baseUrl + '/hotel', { search })
      .map(this.extractData);
  }

  private extractData(response: Response) {
    let body = response.json();
    return body || {};
  }

}
