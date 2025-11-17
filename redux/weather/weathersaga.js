import {
    call,
    put,
    takeLatest
} from "redux-saga/effects";
import {
    sendr
} from "./type";
import axios from "axios";
import {
    Error,
    Wather
} from "./action"


const getweather = (query) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=d22c74881d44cee16497051544366030&units=metric`)
}

function* handlegetweather(action) {
    try {
        const res = yield call(getweather,action.payload)
        yield put(Wather(res.data))
    } catch (error) {
        yield put(Error(error.message))
    }
}

export function* watchersaga() {
    yield takeLatest(sendr,handlegetweather)
}