import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [NavbarComponent, SearchComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
