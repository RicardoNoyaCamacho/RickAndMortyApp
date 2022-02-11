import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations/locations.component';
import { LocationComponent } from './location/location.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LocationsComponent, LocationComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
})
export class LocationsModule {}
