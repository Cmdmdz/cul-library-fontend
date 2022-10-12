
import { Borrowed } from "../tpyes/borrow.type";
import { httpClient } from "../utils/httpclient";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { BOOK_CLEAR, BOOK_FETCHING, BOOK_SUCCESS, BORROWED_CLEAR, BORROWED_FETCHING, BORROWED_SUCCESS, server, USER_ID } from "../Constants";

export const setBorrowedFetchingToState = () => ({
    type: BORROWED_FETCHING,
});

export const setBorrowedSuccessToState = (payload: Borrowed[]) => ({
    type: BORROWED_SUCCESS,
    payload,
});


export const setBorrowedFailedToState = () => ({
    type: BORROWED_FETCHING,
});

export const setBorrowedClearToState = () => ({
    type: BORROWED_CLEAR,
});

export const loadListBorrowed = () => {
    return (dispatch: any) => {
        dispatch(setBorrowedFetchingToState());
        doPutBorrowed( dispatch);
    };
};


const doPutBorrowed = async ( dispatch: any) => {
    try {
        const userId = localStorage.getItem(USER_ID);
        const result = await httpClient.get<Borrowed[]>(`${server.USER}/${userId}`);
 
        dispatch(setBorrowedSuccessToState(result.data));
    } catch (error) {
        dispatch(setBorrowedFailedToState());
    }
};


export const addBorrowed = ( values: any, navigate: any) => {
    const userId = localStorage.getItem(USER_ID);
    return async (dispatch: any) => {
        await httpClient.put(`${server.USER}/${userId}`, values);
        navigate("/detail")

    };
};









