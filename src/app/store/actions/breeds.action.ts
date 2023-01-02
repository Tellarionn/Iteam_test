import { createAction, props } from "@ngrx/store";
import { IBreed } from "src/app/shared/interfaces/breed.interface";

export const getBreeds = createAction(
  '[Breeds] Get Breeds '
);

export const getBreedsSuccess = createAction(
  '[Breeds] Get Breeds Success',
  props<{ breeds: IBreed[] }>()
);

export const getBreedsFailer = createAction(
  '[Breeds] Get Breeds Success',
  props<{ error: unknown }>()
);

