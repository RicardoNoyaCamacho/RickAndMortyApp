import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './characters/characters/characters.component';
import { CharacterComponent } from './characters/character/character.component';

import { LocationsComponent } from './locations/locations/locations.component';
import { LocationComponent } from './locations/location/location.component';

import { EpisodesComponent } from './episodes/episodes/episodes.component';
import { EpisodeComponent } from './episodes/episode/episode.component';
import { SearchComponent } from './shared/search/search.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'location/:id', component: LocationComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'episode/:id', component: EpisodeComponent },
  { path: 'characters/:value', component: SearchComponent },
  { path: 'locations/:value', component: SearchComponent },
  { path: 'episodes/:value', component: SearchComponent },
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
