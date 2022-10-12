import { combineReducers } from "redux";
import registerReducer, { RegisterState } from "./register.reducer";
import loginReducer, { LoginState } from "./login.reducer";
import bookReducer, { BookState } from "./book.reducer";
import borrowReducer, {BorrowedState} from "./borrow.reducer";
export default combineReducers({
  registerReducer,
  loginReducer,
  bookReducer,
  borrowReducer,

});

export interface RootReducers {
  registerReducer: RegisterState;
  loginReducer: LoginState;
  bookReducer: BookState;
  borrowReducer:BorrowedState;
}
