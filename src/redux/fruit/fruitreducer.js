import { buyapple, buyorange } from "./fruittype"

const fruit ={
    apple:10,
    orange:15
}

const reducer =(state=fruit,action)=>{
switch(action.type){
    case buyapple:
    return{...state,apple:state.apple-1}
    case buyorange:
        return{...state,orange:state.orange-1}

        default:
            return state
           
}
}

export default reducer