import { Action, createReducer, on } from "@ngrx/store";
import * as loadActions from '../actions/load.action';
import { ILoadState, initialLoadState } from "../state/load.state";

const reducer = createReducer(
  initialLoadState,
  on(
    loadActions.setLoaded, (state, { loaded }) => {
      return ({
        ...state,
        loaded,
      });
    }
  ),
)

export function loadReducer(state: ILoadState | undefined, action: Action): ILoadState {
  return reducer(state, action);
}
