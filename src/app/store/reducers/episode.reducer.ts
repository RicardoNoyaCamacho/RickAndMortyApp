import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Episode } from '../../models/episode.model';

export interface EpisodeState {
  id: string;
  episode: Episode | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const episodeInitialState: EpisodeState = {
  id: '',
  episode: null,
  loaded: false,
  loading: false,
  error: null,
};

const _episodeReducer = createReducer(
  episodeInitialState,

  on(actions.cargarEpisode, (state, { id }) => ({
    ...state,
    loading: true,
    id,
  })),
  on(actions.cargarEpisodeSuccess, (state, { episode }) => ({
    ...state,
    loading: false,
    loaded: true,
    episode: { ...episode },
  })),
  on(actions.cargarEpisodeError, (state, { payload }) => ({
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

export function episodeReducer(
  state: EpisodeState | undefined,
  action: Action
) {
  return _episodeReducer(state, action);
}
