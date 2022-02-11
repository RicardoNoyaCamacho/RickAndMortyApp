import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
  characters: reducers.CharactersState;
  character: reducers.CharacterState;
  locations: reducers.LocationsState;
  episodes: reducers.EpisodesState;
}

export const appReducers: ActionReducerMap<AppState> = {
  characters: reducers.charactersReducer,
  character: reducers.characterReducer,
  locations: reducers.locationsReducer,
  episodes: reducers.episodesReducer,
};
