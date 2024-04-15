import { createStore } from "redux";
// import { rootReducers } from "./reducers";
import { authReducer } from "./reducers/auth.reducer";

export const Store = createStore(
  authReducer
);
