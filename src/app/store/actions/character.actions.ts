import { createAction, props } from '@ngrx/store';
import { Character } from '../../models/character.model';

export const cargarCharacter = createAction(
  '[Character] Cargar Character',
  props<{ id: string }>()
);

export const cargarCharacterSuccess = createAction(
  '[Character] Cargar Character Success',
  props<{ character: Character }>()
);

export const cargarCharacterError = createAction(
  '[Character] Cargar Character Error',
  props<{ payload: any }>()
);
