import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Character } from '../../models/character.model';

export interface CharacterState {
  id: string;
  character: Character | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const characterInitialState: CharacterState = {
  id: '',
  character: null,
  loaded: false,
  loading: false,
  error: null,
};

const _characterReducer = createReducer(
  characterInitialState,

  on(actions.cargarCharacter, (state, { id }) => ({
    ...state,
    loading: true,
    id,
  })),
  on(actions.cargarCharacterSuccess, (state, { character }) => ({
    ...state,
    loading: false,
    loaded: true,
    character: { ...character },
  })),
  on(actions.cargarCharacterError, (state, { payload }) => ({
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

export function characterReducer(
  state: CharacterState | undefined,
  action: Action
) {
  return _characterReducer(state, action);
}
