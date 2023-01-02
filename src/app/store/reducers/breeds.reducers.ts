import { Action, createReducer, on } from "@ngrx/store";
import { IBreedState, initialBreedState } from "../state/breed.state";

import * as BreedsActions from '../actions/breeds.action';

const reducer = createReducer(
  initialBreedState,
  on(
    BreedsActions.getBreedsSuccess, (state, { breeds }) => {
      return ({
        ...state,
        breeds,
      });
    }
  ),
)

export function breedsReducer(state: IBreedState | undefined, action: Action): IBreedState {
  return reducer(state, action);
}
