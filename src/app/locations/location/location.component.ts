import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import * as locationActions from '../../store/actions/location.actions';

import { Location } from '../../models/location.model';
import * as characterActions from '../../store/actions/character.actions';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styles: [],
})
export class LocationComponent implements OnInit, OnDestroy {
  location!: Location | null;
  loading: boolean = false;
  error: any;

  regex = /(\d+)/g;

  locationSubs?: Subscription;

  characters: any[] = [];
  characterSubs?: Subscription;

  ids: any[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private store: Store<AppState>
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
        //   console.log(id[0]);
        //   // this.subscriptions.push(
        //   //   this.store
        //   //     .select('character')
        //   //     .subscribe(({ character, loading, error }) => {
        //   //       this.characters.push(character);
        //   //       this.loading = loading;
        //   //       this.error = error;
        //   //     })
        //   // );

        //   // this.store.dispatch(characterActions.cargarCharacter(id[0]));
        // });

        this.loading = loading;
        this.error = error;

        // this.characteres();
      });

    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(locationActions.cargarLocation({ id }));
    });
  }

  // characteres() {
  //   this.location?.residents.forEach((r) => {
  //     this.http.get(r).subscribe((c) => this.characteresArray.push(c));
  //   });
  // }

  back() {
    this.route.navigate(['/locations']);
  }

  ngOnDestroy(): void {
    // this.subscriptions.forEach((s) => s.unsubscribe());
    this.locationSubs?.unsubscribe();
  }
}
