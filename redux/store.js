import { createStore } from "redux";
import { Reducer } from "./weather/reducer";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"
import { watchersaga } from "./weather/weathersaga";

const sagamiddleaere = createSagaMiddleware()

export const Store = createStore(Reducer,applyMiddleware(sagamiddleaere))

sagamiddleaere.run(watchersaga)
