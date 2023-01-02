import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IBreedState } from "../state/breed.state";

export const breedsSelector = (state: IAppState) => state.breeds;

export const selectBreeds = createSelector(
  breedsSelector,
  (state: IBreedState) => state.breeds
);
