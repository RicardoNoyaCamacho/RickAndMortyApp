import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import * as episodeActions from '../actions';
import { EpisodesService } from '../../services/episodes.service';

@Injectable()
export class EpisodeEffects {
  constructor(
    private actions$: Actions,
    private episodeService: EpisodesService
  ) {}

  //el simbolo de dolar o peso significa que es un observable
  //el actions de ngrx es un observable que esta pendiente de todas las acciones
  cargarEpisode$ = createEffect(() =>
    this.actions$.pipe(
      //Escuchar la acción
      ofType(episodeActions.cargarEpisode),
      //Unir Observable a la solicitud anterior
      mergeMap((action) =>
        this.episodeService.getEpisodeById(action.id).pipe(
          //Disparar la acción
          map((episode: any) =>
            episodeActions.cargarEpisodeSuccess({ episode })
          ),
          //Manejar Error
          catchError((err) =>
            //Convertir respuesta a Observable
            of(episodeActions.cargarEpisodeError({ payload: err }))
          )
        )
      )
    )
  );
}
