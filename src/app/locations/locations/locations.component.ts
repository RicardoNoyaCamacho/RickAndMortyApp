import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarLocations } from '../../store/actions/locations.actions';
import { Router } from '@angular/router';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent implements OnInit {
  locations: any[] = [];

  loading: boolean = false;
  error: any;

  locationsSubs?: Subscription;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.locationsSubs = this.store
      .select('locations')
      .subscribe(({ locations, loading, error }) => {
        this.locations = locations;
        this.loading = loading;
        this.error = error;
      });
    this.store.dispatch(cargarLocations());
  }

  list(l: Location) {
    this.router.navigate(['/location', l.id]);
  }

  ngOnDestroy(): void {
    this.locationsSubs?.unsubscribe();
  }
}
