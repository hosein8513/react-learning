import axios from "axios"
import {
    call,
    put,
    takeEvery
} from "redux-saga/effects"
import {
    Error,
    Request,
    Wather
} from "./action"
import {
    sendr
} from "./type"


const getweatherinfo = (query = "tehran") => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=d22c74881d44cee16497051544366030`)
}

function* handlegetweather() {
    try {
        const res = yield call(getweatherinfo)
        yield put(Wather(res.data))
    } catch (error) {
        yield put(Error(error.message))
    }
}

export function* weathersaga() {
    yield takeEvery(sendr, handlegetweather)
}