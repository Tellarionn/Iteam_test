import { IBreed } from "src/app/shared/interfaces/breed.interface";

export interface IBreedState {
  breeds: IBreed[];
}

export const initialBreedState: IBreedState = {
  breeds: [],
}
