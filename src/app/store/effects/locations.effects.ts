import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import * as locationsActions from '../actions';
import { LocationsService } from '../../services/locations.service';

@Injectable()
export class LocationsEffects {
  constructor(
    private actions$: Actions,
    private locationsService: LocationsService
  ) {}

  //el simbolo de dolar o peso significa que es un observable
  //el actions de ngrx es un observable que esta pendiente de todas las acciones
  cargarLocations$ = createEffect(() =>
    this.actions$.pipe(
      //Escuchar la acción
      ofType(locationsActions.cargarLocations),
      //Unir Observable a la solicitud anterior
      mergeMap(() =>
        this.locationsService.getLocations().pipe(
          //Disparar la acción
          map((locations) =>
            locationsActions.cargarLocationsSuccess({ locations })
          ),
          //Manejar Error
          catchError((err) =>
            //Convertir respuesta a Observable
            of(locationsActions.cargarLocationsError({ payload: err }))
          )
        )
      )
    )
  );
}
