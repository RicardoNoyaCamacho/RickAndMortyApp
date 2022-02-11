import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import * as characterActions from '../actions';
import { CharacterService } from '../../services/character.service';

@Injectable()
export class CharacterEffects {
  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}

  //el simbolo de dolar o peso significa que es un observable
  //el actions de ngrx es un observable que esta pendiente de todas las acciones
  cargarCharacter$ = createEffect(() =>
    this.actions$.pipe(
      //Escuchar la acción
      ofType(characterActions.cargarCharacter),
      //Unir Observable a la solicitud anterior
      mergeMap((action) =>
        this.characterService.getCharacterById(action.id).pipe(
          //Disparar la acción
          map((character: any) =>
            characterActions.cargarCharacterSuccess({ character })
          ),
          //Manejar Error
          catchError((err) =>
            //Convertir respuesta a Observable
            of(characterActions.cargarCharacterError({ payload: err }))
          )
        )
      )
    )
  );
}
