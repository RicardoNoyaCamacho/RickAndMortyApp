import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Location } from '../../models/location.model';

export interface LocationState {
  id: string;
  location: Location | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const locationInitialState: LocationState = {
  id: '',
  location: null,
  loaded: false,
  loading: false,
  error: null,
};

const _locationReducer = createReducer(
  locationInitialState,

  on(actions.cargarLocation, (state, { id }) => ({
    ...state,
    loading: true,
    id,
  })),
  on(actions.cargarLocationSuccess, (state, { location }) => ({
    ...state,
    loading: false,
    loaded: true,
    location: { ...location },
  })),
  on(actions.cargarLocationError, (state, { payload }) => ({
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

export function locationReducer(
  state: LocationState | undefined,
  action: Action
) {
  return _locationReducer(state, action);
}
