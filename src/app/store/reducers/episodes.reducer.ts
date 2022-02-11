import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Episode } from '../../models/episode.model';

export interface EpisodesState {
  episodes: Episode[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const episodesInitialState: EpisodesState = {
  episodes: [],
  loaded: false,
  loading: false,
  error: null,
};

const _episodesReducer = createReducer(
  episodesInitialState,

  on(actions.cargarEpisodes, (state) => ({ ...state, loading: true })),
  on(actions.cargarEpisodesSuccess, (state, { episodes }) => ({
    ...state,
    loading: false,
    loaded: true,
    episodes: [...episodes],
  })),
  on(actions.cargarEpisodesError, (state, { payload }) => ({
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

export function episodesReducer(
  state: EpisodesState | undefined,
  action: Action
) {
  return _episodesReducer(state, action);
}
