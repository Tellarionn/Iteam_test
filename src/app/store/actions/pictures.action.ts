import { createAction, props } from "@ngrx/store";
import { IPicture } from "src/app/shared/interfaces/picture.interface";

export const getPictures = createAction(
  '[Pictures] Get Pictures ',
  props<{
    limit: number,
    page: number,
    breed?: string
  }>()
);

export const getPicturesSuccess = createAction(
  '[Pictures] Get Pictures Success',
  props<{ pictures: IPicture[] }>()
);

export const getPicturesFailer = createAction(
  '[Pictures] Get Pictures Success',
  props<{ error: unknown }>()
);
