import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { ILoadState } from "../state/load.state";

export const loadSelector = (state: IAppState) => state.loaded;

export const selectLoaded = createSelector(
  loadSelector,
  (state: ILoadState) => state.loaded
);
