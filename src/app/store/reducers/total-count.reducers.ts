import { Action, createReducer, on } from "@ngrx/store";
import { initialPictureState, IPictureState } from "../state/picture.state";
import * as totalAction from '../actions/total-count.action';
import { initialTotalCountState, ITotalCountState } from "../state/total-count.state";

const reducer = createReducer(
  initialTotalCountState,
  on(
    totalAction.setTotalCount, (state, { count }) => {
      return ({
        ...state,
        count,
      });
    }
  ),
)

export function totalCountReducer(state: ITotalCountState | undefined, action: Action): ITotalCountState {
  return reducer(state, action);
}
