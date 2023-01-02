import { Action, ActionReducerMap } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { breedsReducer } from "./breeds.reducers";
import { loadReducer } from "./load.reducer";
import { pictureReducer } from "./pictures.reducers";
import { totalCountReducer } from "./total-count.reducers";

export const appReducer: ActionReducerMap<IAppState, Action> = {
  breeds: breedsReducer,
  pictures: pictureReducer,
  count: totalCountReducer,
  loaded: loadReducer,
};
