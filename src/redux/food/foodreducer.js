import { buysandwich } from "./foodtype"

const food={
    sandwich:20
}


const foodreducer =(state=food,action)=>{
switch(action.type){
    case buysandwich:
    return{...state,sandwich:state.sandwich-action.payload}

    default:
        return state
}
}

export default foodreducer