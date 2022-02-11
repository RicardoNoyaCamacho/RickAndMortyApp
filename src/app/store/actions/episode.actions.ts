import { createAction, props } from '@ngrx/store';
import { Episode } from '../../models/episode.model';

export const cargarEpisode = createAction(
  '[Episode] Cargar Episode',
  props<{ id: string }>()
);

export const cargarEpisodeSuccess = createAction(
  '[Episode] Cargar Episode Success',
  props<{ episode: Episode }>()
);

export const cargarEpisodeError = createAction(
  '[Episode] Cargar Episode Error',
  props<{ payload: any }>()
);
