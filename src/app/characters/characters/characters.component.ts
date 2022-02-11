import { Component, OnInit, OnDestroy } from '@angular/core';
import { Character } from '../../models/character.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarCharacters } from '../../store/actions/characters.actions';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './characters.component.html',
  styles: [],
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters: Character[] = [];

  loading: boolean = false;
  error: any;

  charactersSubs?: Subscription;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.charactersSubs = this.store
      .select('characters')
      .subscribe(({ characters, loading, error }) => {
        this.characters = characters;
        this.loading = loading;
        this.error = error;
      });
    this.store.dispatch(cargarCharacters());
  }

  desc(c: Character) {
    this.router.navigate(['/character', c.id]);
  }

  ngOnDestroy(): void {
    this.charactersSubs?.unsubscribe();
  }
}
