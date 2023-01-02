import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IPictureState } from "../state/picture.state";

export const picturesSelector = (state: IAppState) => state.pictures;

export const selectPictures = createSelector(
  picturesSelector,
  (state: IPictureState) => state.pictures
);
