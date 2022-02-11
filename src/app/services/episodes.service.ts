import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  private _url = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) {}

  getEpisodes() {
    return this.http
      .get(`${this._url}`)
      .pipe(map((resp: any) => resp['results']));
  }

  getEpisodesById(id: string) {
    return this.http.get(`${this._url}/${id}`);
  }
}
