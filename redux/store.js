import {
    createStore
} from "redux";
import {
    Reducer
} from "./weather/reducer";
import {
    applyMiddleware
} from "redux";
import {
    createSagaMiddleware
} from "redux-saga"
import {
    weathersaga
} from "./weather/weathersaga";

const saga = createSagaMiddleware()

export const Store = createStore(Reducer, applyMiddleware(saga))


saga.run(weathersaga)