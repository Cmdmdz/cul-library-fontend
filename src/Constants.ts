// Success Page
export const LOGIN_FETCHING = "LOGIN_FETCHING";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

// Register Page
export const REGISTER_FETCHING = "REGISTER_FETCHING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

// Book Page

export const BOOK_FETCHING = "BOOK_FETCHING";
export const BOOK_SUCCESS = "BOOK_SUCCESS";
export const BOOK_FAILED = "BOOK_FAILED";
export const BOOK_CLEAR = "BOOK_CLEAR";

// Borrowed page

export const BORROWED_FETCHING = "BORROWED_FETCHING";
export const BORROWED_SUCCESS = "BORROWED_SUCCESS";
export const BORROWED_FAILED ="BORROWED_FAILED";
export const BORROWED_CLEAR = "BORROWED_CLEAR"

// Stock Edit Page
export const STOCK_EDIT_FETCHING = "STOCK_EDIT_FETCHING";
export const STOCK_EDIT_SUCCESS = "STOCK_EDIT_SUCCESS";
export const STOCK_EDIT_FAILED = "STOCK_EDIT_FAILED";

export const apiUrl = "http://localhost:8080";

export const YES = "YES";
export const NO = "NO";
export const OK = "ok";
export const NOK = "nok";
export const TOKEN = "TOKEN";
export const USER_ID = "USER_ID";

export const LOGIN_STATUS = "LOGIN_STATUS";

export const server = {
  LOGIN_URL: `login`,
  REGISTER_URL: `register`,
  LOGIN_PASSED: `yes`,
  BOOK: `book`,
  USER: `user`,
  
};

// Error Code
export const E_PICKER_CANCELLED = "E_PICKER_CANCELLED";
export const E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR =
  "E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR";
export const E_PERMISSION_MISSING = "E_PERMISSION_MISSING";
export const E_PICKER_NO_CAMERA_PERMISSION = "E_PICKER_NO_CAMERA_PERMISSION";
export const E_USER_CANCELLED = "E_USER_CANCELLED";
export const E_UNKNOWN = "E_UNKNOWN";
export const E_DEVELOPER_ERROR = "E_DEVELOPER_ERROR";
export const TIMEOUT_NETWORK = "ECONNABORTED"; // request service timeout
export const NOT_CONNECT_NETWORK = "NOT_CONNECT_NETWORK";

//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE =
  "Cannot connect to server, Please try again.";
export const NETWORK_TIMEOUT_MESSAGE =
  "A network timeout has occurred, Please try again.";
export const UPLOAD_PHOTO_FAIL_MESSAGE =
  "An error has occurred. The photo was unable to upload.";
