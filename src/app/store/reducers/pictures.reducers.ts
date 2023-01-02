import { Action, createReducer, on } from "@ngrx/store";
import { initialPictureState, IPictureState } from "../state/picture.state";
import * as PictureActions from '../actions/pictures.action';

const reducer = createReducer(
  initialPictureState,
  on(
    PictureActions.getPicturesSuccess, (state, { pictures }) => {
      return ({
        ...state,
        pictures,
      });
    }
  ),
)

export function pictureReducer(state: IPictureState | undefined, action: Action): IPictureState {
  return reducer(state, action);
}
