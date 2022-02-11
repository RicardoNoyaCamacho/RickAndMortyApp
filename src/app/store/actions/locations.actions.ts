import { createAction, props } from '@ngrx/store';
import { Location } from '../../models/location.model';

export const cargarLocations = createAction('[Locations] Cargar Locations');

export const cargarLocationsSuccess = createAction(
  '[Locations] Cargar Locations Success',
  props<{ locations: Location[] }>()
);

export const cargarLocationsError = createAction(
  '[Locations] Cargar Locations Error',
  props<{ payload: any }>()
);
