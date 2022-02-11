import { createAction, props } from '@ngrx/store';
import { Location } from '../../models/location.model';

export const cargarLocation = createAction(
  '[Location] Cargar Location',
  props<{ id: string }>()
);

export const cargarLocationSuccess = createAction(
  '[Location] Cargar Location Success',
  props<{ location: Location }>()
);

export const cargarLocationError = createAction(
  '[Location] Cargar Location Error',
  props<{ payload: any }>()
);
