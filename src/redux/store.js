import { createStore } from "redux";
import reducer from "./fruit/fruitreducer";

const store =createStore(reducer)


export default store