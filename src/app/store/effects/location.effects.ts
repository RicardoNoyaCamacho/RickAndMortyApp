import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import * as locationActions from '../actions';
import { LocationsService } from '../../services/locations.service';

@Injectable()
export class LocationEffects {
  constructor(
    private actions$: Actions,
    private locationService: LocationsService
  ) {}

  //el simbolo de dolar o peso significa que es un observable
  //el actions de ngrx es un observable que esta pendiente de todas las acciones
  cargarLocation$ = createEffect(() =>
    this.actions$.pipe(
      //Escuchar la acción
      ofType(locationActions.cargarLocation),
      //Unir Observable a la solicitud anterior
      mergeMap((action) =>
        this.locationService.getLocationById(action.id).pipe(
          //Disparar la acción
          map((location: any) =>
            locationActions.cargarLocationSuccess({ location })
          ),
          //Manejar Error
          catchError((err) =>
            //Convertir respuesta a Observable
            of(locationActions.cargarLocationError({ payload: err }))
          )
        )
      )
    )
  );
}
