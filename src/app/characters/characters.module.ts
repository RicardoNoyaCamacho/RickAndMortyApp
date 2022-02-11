import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CharactersComponent, CharacterComponent],
  imports: [CommonModule, RouterModule],
  exports: [CharactersComponent, CharacterComponent],
})
export class CharactersModule {}
