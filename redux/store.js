import { createStore } from "redux";
import { Reducer } from "./weather/reducer";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

export const Store = createStore(Reducer,applyMiddleware(thunk))