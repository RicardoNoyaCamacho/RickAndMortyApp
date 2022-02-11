import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//Rutas
import { AppRoutingModule } from './app-routing.module';
//Modulos
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CharactersModule } from './characters/characters.module';

//NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { appReducers } from './store/app.reducers';
import { EffectsArray } from './store/effects';
import { LocationsModule } from './locations/locations.module';
import { EpisodesModule } from './episodes/episodes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CharactersModule,
    LocationsModule,
    EpisodesModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(EffectsArray),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
