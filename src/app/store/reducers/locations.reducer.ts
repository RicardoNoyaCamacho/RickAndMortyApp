import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Location } from '../../models/location.model';

export interface LocationsState {
  locations: Location[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const locationsInitialState: LocationsState = {
  locations: [],
  loaded: false,
  loading: false,
  error: null,
};

const _locationsReducer = createReducer(
  locationsInitialState,

  on(actions.cargarLocations, (state) => ({ ...state, loading: true })),
  on(actions.cargarLocationsSuccess, (state, { locations }) => ({
    ...state,
    loading: false,
    loaded: true,
    locations: [...locations],
  })),
  on(actions.cargarLocationsError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      massage: payload.message,
    },
  }))
);

export function locationsReducer(
  state: LocationsState | undefined,
  action: Action
) {
  return _locationsReducer(state, action);
}
