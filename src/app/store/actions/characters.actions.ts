import { createAction, props } from '@ngrx/store';
import { Character } from '../../models/character.model';

export const cargarCharacters = createAction('[Characters] Cargar Characters');

export const cargarCharactersSuccess = createAction(
  '[Characters] Cargar Characters Success',
  props<{ characters: Character[] }>()
);

export const cargarCharactersError = createAction(
  '[Characters] Cargar Characters Error',
  props<{ payload: any }>()
);
