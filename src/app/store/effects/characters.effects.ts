import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import * as charactersActions from '../actions';
import { CharacterService } from '../../services/character.service';

@Injectable()
export class CharactersEffects {
  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}

  //el simbolo de dolar o peso significa que es un observable
  //el actions de ngrx es un observable que esta pendiente de todas las acciones
  cargarCharacters$ = createEffect(() =>
    this.actions$.pipe(
      //Escuchar la acción
      ofType(charactersActions.cargarCharacters),
      //Unir Observable a la solicitud anterior
      mergeMap(() =>
        this.characterService.getCharacters().pipe(
          //Disparar la acción
          map((characters) =>
            charactersActions.cargarCharactersSuccess({ characters })
          ),
          //Manejar Error
          catchError((err) =>
            //Convertir respuesta a Observable
            of(charactersActions.cargarCharactersError({ payload: err }))
          )
        )
      )
    )
  );
}
