import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private _url = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  searchCharacter(search: string, value: string) {
    return this.http
      .get(`${this._url}/${search}?name=${value}`)
      .pipe(map((resp: any) => resp['results']));
  }
}
