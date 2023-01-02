import { createAction, props } from "@ngrx/store";

export const setTotalCount = createAction(
  '[Total Count] Set Total Count',
  props<{ count: number }>()
);



