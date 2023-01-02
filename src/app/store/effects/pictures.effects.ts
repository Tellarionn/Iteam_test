import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, from, of, switchMap, tap } from 'rxjs';
import { IPicture } from 'src/app/shared/interfaces/picture.interface';
import { PicturesService } from 'src/app/shared/services/pictures.service';
import { setLoaded } from '../actions/load.action';
import * as pictureActions from '../actions/pictures.action';
import * as totalAction from '../actions/total-count.action';
import { IAppState } from '../state/app.state';

@Injectable()
export class PictureEffects {

  readonly loadPictures$ = createEffect(() =>
    this.actions$.pipe(
      ofType(pictureActions.getPictures),
      tap(() => this.store.dispatch(setLoaded({ loaded: false }))),
      switchMap(({ limit, page, breed }) => this.pictureService.getCatsPictures(limit, page, breed).pipe(
        switchMap((response: HttpResponse<Object>) => {
          let count: number = 0;
          if (response.headers.get('Pagination-Count')) {
            count = Number(response.headers.get('Pagination-Count'));
          }
          return from([
            pictureActions.getPicturesSuccess({ pictures: response.body as IPicture[] }),
            totalAction.setTotalCount({ count })
          ]);
        }),
        catchError((error: unknown) => of(pictureActions.getPicturesFailer({ error }))),
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private pictureService: PicturesService,
    private readonly store: Store<IAppState>
  ) { }
}
