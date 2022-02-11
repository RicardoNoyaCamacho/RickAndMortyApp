import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private _url = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http
      .get(`${this._url}`)
      .pipe(map((resp: any) => resp['results']));
  }

  getCharacterById(id: string) {
    return this.http.get(`${this._url}/${id}`);
  }
}
