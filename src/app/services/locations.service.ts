import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  private _url = 'https://rickandmortyapi.com/api/location';

  constructor(private http: HttpClient) {}

  getLocations() {
    return this.http
      .get(`${this._url}`)
      .pipe(map((resp: any) => resp['results']));
  }

  getLocationById(id: string) {
    return this.http.get(`${this._url}/${id}`);
  }
}
