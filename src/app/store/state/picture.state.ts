import { IPicture } from "src/app/shared/interfaces/picture.interface";

export interface IPictureState {
  pictures: IPicture[];
}

export const initialPictureState: IPictureState = {
  pictures: [],
}
