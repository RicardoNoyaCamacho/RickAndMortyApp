import { createAction, props } from '@ngrx/store';
import { Episode } from '../../models/episode.model';

export const cargarEpisodes = createAction('[Episodes] Cargar Episodes');

export const cargarEpisodesSuccess = createAction(
  '[Episodes] Cargar Episodes Success',
  props<{ episodes: Episode[] }>()
);

export const cargarEpisodesError = createAction(
  '[Episodes] Cargar Episodes Error',
  props<{ payload: any }>()
);
