import { buysandwich } from "./foodtype"

const food={
    sandwich:20
}


const foodreducer =(state=food,action)=>{
switch(action.type){
    case buysandwich:
    return{...state,sandwich:state.sandwich-1}

    default:
        return state
}
}

export default foodreducer