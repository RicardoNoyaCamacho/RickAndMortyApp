import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import * as locationActions from '../../store/actions/location.actions';
import * as characterActions from '../../store/actions/character.actions';

import { Location } from '../../models/location.model';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styles: [],
})
export class LocationComponent implements OnInit {
  location!: Location | null;
  characters: any[] = [];
  loading: boolean = false;
  error: any;

  regex = /(\d+)/g;
  ids: any[] = [];

  locationSubs?: Subscription;
  characterSubs?: any;

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private store: Store<AppState>,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.cargarLocations();
  }

  cargarLocations() {
    this.locationSubs = this.store
      .select('location')
      .subscribe(({ location, loading, error }) => {
        this.location = location;

        // this.location?.residents.forEach((r) => {
        //   this.ids.push(r.match(this.regex));
        // });

        // this.ids.forEach((id) => {
        //   this.characterSubs = this.characterService
        //     .getCharacterById(id[0])
        //     .subscribe((character) => this.characters.push(character));
        // });
        this.loading = loading;
        this.error = error;
      });

    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(locationActions.cargarLocation({ id }));
    });
  }

  // back() {
  //   this.route.navigate(['/locations']);
  // }

  ngOnDestroy(): void {
    this.characterSubs?.unsubscribe();
    this.locationSubs?.unsubscribe();
  }
}
