
import { Book } from "../tpyes/book.type";
import { httpClient } from "../utils/httpclient";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { BOOK_CLEAR, BOOK_FAILED, BOOK_FETCHING, BOOK_SUCCESS, server } from "../Constants";

export const setBookFetchingToState = () => ({
  type: BOOK_FETCHING,
});

export const setBookSuccessToState = (payload: Book[]) => ({
  type: BOOK_SUCCESS,
  payload,
});


export const setBookFailedToState = () => ({
  type: BOOK_FAILED,
});

export const setBookClearToState = () => ({
  type: BOOK_CLEAR,
});

export const loadListBook = () => {
  return (dispatch: any) => {
    dispatch(setBookFetchingToState());
    doGetBook(dispatch);
  };
};



const doGetBook = async (dispatch: any) => {
  try {
    const result = await httpClient.get<Book[]>(server.BOOK);
    dispatch(setBookSuccessToState(result.data));
  } catch (error) {
    dispatch(setBookFailedToState());
  }
};


export const addBook = (values: Book,navigate: any) => {
    console.log(values);
  return async (dispatch: any) => {
    await httpClient.post(server.BOOK, values);
    navigate(-1)
   
  };
};

export const deleteBook = (id: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(setBookFetchingToState());
    await httpClient.delete(`${server.BOOK}/${id}`);
    await doGetBook(dispatch);
  };
};


