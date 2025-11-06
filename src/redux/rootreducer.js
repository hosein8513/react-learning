import { combineReducers } from "redux";
import fruitreducer from "./fruit/fruitreducer";
import foodreducer from "./food/foodreducer";

export const rootreducer = combineReducers({
    fruit:fruitreducer,
    food:foodreducer
})