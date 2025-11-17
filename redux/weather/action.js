import { recivee, reciver, sendr } from "./type"
import Weather from "../../src/Weather"

export const Request =(query)=> {
    return{
        type:sendr,
        payload:query
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
