import axios from "axios"
import { recivee, reciver, sendr } from "./usertype"

export const sendUser = ()=>{
    return{
        type:sendr
    }
}

export const reciveUser = (data) =>{
    return {
        type:reciver,
        payload:data
    }
}

export const reciveError = (error)=> {
    return{
        type:recivee,
        payload:error
    }
}

export const getusers =()=>{
    return(dispatch)=>{
     dispatch(sendUser())
    axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
        dispatch(reciveUser(res.data))
    }).catch(error=>{
        dispatch(reciveError(error.message))
    })
}
}