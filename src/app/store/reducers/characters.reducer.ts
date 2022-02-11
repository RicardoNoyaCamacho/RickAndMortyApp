import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Character } from '../../models/character.model';

export interface CharactersState {
  characters: Character[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const charactersInitialState: CharactersState = {
  characters: [],
  loaded: false,
  loading: false,
  error: null,
};

const _charactersReducer = createReducer(
  charactersInitialState,

  on(actions.cargarCharacters, (state) => ({ ...state, loading: true })),
  on(actions.cargarCharactersSuccess, (state, { characters }) => ({
    ...state,
    loading: false,
    loaded: true,
    characters: [...characters],
  })),
  on(actions.cargarCharactersError, (state, { payload }) => ({
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

export function charactersReducer(
  state: CharactersState | undefined,
  action: Action
) {
  return _charactersReducer(state, action);
}
