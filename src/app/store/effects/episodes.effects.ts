import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import * as episodesActions from '../actions';
import { EpisodesService } from '../../services/episodes.service';

@Injectable()
export class EpisodesEffects {
  constructor(
    private actions$: Actions,
    private episodesService: EpisodesService
  ) {}

  //el simbolo de dolar o peso significa que es un observable
  //el actions de ngrx es un observable que esta pendiente de todas las acciones
  cargarEpisodes$ = createEffect(() =>
    this.actions$.pipe(
      //Escuchar la acción
      ofType(episodesActions.cargarEpisodes),
      //Unir Observable a la solicitud anterior
      mergeMap(() =>
        this.episodesService.getEpisodes().pipe(
          //Disparar la acción
          map((episodes) =>
            episodesActions.cargarEpisodesSuccess({ episodes })
          ),
          //Manejar Error
          catchError((err) =>
            //Convertir respuesta a Observable
            of(episodesActions.cargarEpisodesError({ payload: err }))
          )
        )
      )
    )
  );
}
