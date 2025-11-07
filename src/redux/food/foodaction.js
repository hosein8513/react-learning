import { buysandwich } from "./foodtype"

export const Buysandwich =(count)=>{
    return{
        type:buysandwich,
        payload:count
    }
}