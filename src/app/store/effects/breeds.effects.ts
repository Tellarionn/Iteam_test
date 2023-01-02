import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { IBreed } from 'src/app/shared/interfaces/breed.interface';
import { CatsServiceService } from 'src/app/shared/services/cats-service.service';
import * as breedsActions from '../actions/breeds.action';

@Injectable()
export class BreedsEffects {

  readonly loadBreeds$ = createEffect(() =>
    this.actions$.pipe(
      ofType(breedsActions.getBreeds),
      switchMap(() => this.catService.getBreeds().pipe(
        map((breeds: IBreed[]) => breedsActions.getBreedsSuccess({ breeds })),
        catchError((error: unknown) => of(breedsActions.getBreedsFailer({ error })))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private catService: CatsServiceService,
  ) { }
}
