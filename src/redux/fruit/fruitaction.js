import { buyapple, buyorange } from "./fruittype"

export const Buyapple = (count)=>{
    return {
        type: buyapple,
        payload:count
    }
}

export const Buyorange =(count)=>{
    return {
        type: buyorange,
        payload:count
    }
}