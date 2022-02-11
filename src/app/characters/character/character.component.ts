import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import * as characterActions from '../../store/actions';
import { Character } from '../../models/character.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styles: [],
})
export class CharacterComponent implements OnInit, OnDestroy {
  character!: Character | null;
  loading: boolean = false;
  error: any;

  characterSubs?: Subscription;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.characterSubs = this.store
      .select('character')
      .subscribe(({ character, loading, error }) => {
        this.character = character;
        this.loading = loading;
        this.error = error;
      });

    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(characterActions.cargarCharacter({ id }));
    });
  }

  ngOnDestroy(): void {
    this.characterSubs?.unsubscribe();
  }
}
