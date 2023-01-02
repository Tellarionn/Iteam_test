import { createAction, props } from "@ngrx/store";

export const setLoaded = createAction(
  '[Loading] Set Loaded',
  props<{ loaded: boolean }>()
);



