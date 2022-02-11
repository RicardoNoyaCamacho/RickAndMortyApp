import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './characters/characters/characters.component';
import { CharacterComponent } from './characters/character/character.component';

import { LocationsComponent } from './locations/locations/locations.component';
import { LocationComponent } from './locations/location/location.component';

import { EpisodesComponent } from './episodes/episodes/episodes.component';
import { EpisodeComponent } from './episodes/episode/episode.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'location/:id', component: LocationComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'episode/:id', component: EpisodeComponent },
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
