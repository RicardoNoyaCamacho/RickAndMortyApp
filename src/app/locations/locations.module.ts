import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations/locations.component';
import { LocationComponent } from './location/location.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LocationsComponent, LocationComponent],
  imports: [CommonModule, RouterModule],
})
export class LocationsModule {}
