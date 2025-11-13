import { applyMiddleware, createStore } from "redux";
import userReducer from "./user/userreducer";
import { thunk } from "redux-thunk";

export const Store = createStore(userReducer,applyMiddleware(thunk))