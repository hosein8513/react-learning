import { buyapple, buyorange } from "./fruittype"

const fruit ={
    apple:10,
    orange:15
}

const fruitreducer =(state=fruit,action)=>{
switch(action.type){
    case buyapple:
    return{...state,apple:state.apple-action.payload}
    case buyorange:
        return{...state,orange:state.orange-action.payload}

        default:
            return state
           
}
}

export default fruitreducer