import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { ITotalCountState } from "../state/total-count.state";

export const totalCountSelector = (state: IAppState) => state.count;

export const selectTotalCount = createSelector(
  totalCountSelector,
  (state: ITotalCountState) => state.count
);
