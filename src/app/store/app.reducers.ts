import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
  characters: reducers.CharactersState;
  character: reducers.CharacterState;
  locations: reducers.LocationsState;
  location: reducers.LocationState;
  episodes: reducers.EpisodesState;
  episode: reducers.EpisodeState;
}

export const appReducers: ActionReducerMap<AppState> = {
  characters: reducers.charactersReducer,
  character: reducers.characterReducer,
  locations: reducers.locationsReducer,
  location: reducers.locationReducer,
  episodes: reducers.episodesReducer,
  episode: reducers.episodeReducer,
};
