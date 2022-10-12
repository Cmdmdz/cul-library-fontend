import {
    BOOK_CLEAR,
    BOOK_FAILED,
    BOOK_FETCHING,
    BOOK_SUCCESS,
  } from "../Constants";
import { Book } from "../tpyes/book.type";
  
  export interface BookState {
    result: Book[];
    isFetching: boolean;
    isError: boolean;
  }
  
  const initialState: BookState = {
    result: [],
    isFetching: false,
    isError: false,
  };
  
  export default (state = initialState, { type, payload }: any) => {
    switch (type) {
      case BOOK_FETCHING:
        return { ...state, result: [], isFetching: true, isError: false };
      case BOOK_SUCCESS:
        return { ...state, result: payload, isFetching: false, isError: false };
      case BOOK_FAILED:
        return { ...state, result: [], isFetching: false, isError: true };
      case BOOK_CLEAR:
        return { ...state, result: [], isFetching: false, isError: false };
      default:
        return state;
    }
  };
  