import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters/character.component';
import { CharacterComponent } from './characters/character/character.component';
import { LocationsComponent } from './locations/locations/locations.component';
import { EpisodesComponent } from './episodes/episodes/episodes.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'location/:id', component: CharacterComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'episode/:id', component: CharacterComponent },
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
