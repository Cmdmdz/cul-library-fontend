import {
  BORROWED_CLEAR,
  BORROWED_FAILED,
  BORROWED_FETCHING,
  BORROWED_SUCCESS,
} from "../Constants";
import { Borrowed } from "../tpyes/borrow.type";

export interface BorrowedState {
  isFetching: boolean;
  isError: boolean;
  result: Borrowed[];
}

const initialState: BorrowedState = {
  isFetching: false,
  isError: false,
  result: [],
};

export default (state = initialState, { type, payload }: any): BorrowedState => {
  switch (type) {
    case BORROWED_FETCHING:
      return { ...state, isFetching: true, isError: false, result: [] };
    case BORROWED_SUCCESS:
      return { ...state, isFetching: false, isError: false, result: payload };
    case BORROWED_FAILED:
      return { ...state, isFetching: false, isError: true, result: [] };
    case BORROWED_CLEAR:
      return { ...state, result: [], isFetching: false, isError: false };
    default:
      return state;
  }
};
