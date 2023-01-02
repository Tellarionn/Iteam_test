import { IBreedState, initialBreedState } from "./breed.state";
import { ILoadState, initialLoadState } from "./load.state";
import { initialPictureState, IPictureState } from "./picture.state";
import { initialTotalCountState, ITotalCountState } from "./total-count.state";

export interface IAppState {
  breeds: IBreedState,
  pictures: IPictureState,
  count: ITotalCountState,
  loaded: ILoadState,
}

export const initialAppState = {
  breeds: initialBreedState,
  pictures: initialPictureState,
  count: initialTotalCountState,
  loaded: initialLoadState,
}

export function getInitialState(): IAppState {
  return initialAppState;
}
