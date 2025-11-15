import axios from "axios"
import { recivee, reciver, sendr } from "./type"
import Weather from "../../src/Weather"

export const Request =()=> {
    return{
        type:sendr
    }
}

export const Wather = (data) =>{
    return{
        type:reciver,
        payload:data
    }
}

export const Error = (error)=>{
    return{
        type:recivee,
        payload:error
    }
}

export const getweatherinfo = (query) =>{
    return dispatch=>{
        dispatch(Request())
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=d22c74881d44cee16497051544366030`).then(res=>{
            dispatch(Wather(res.data))
        }).catch(error=>{
            dispatch(Error(error))
        })
    }
}