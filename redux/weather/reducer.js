import {
    recivee,
    reciver,
    sendr
} from "./type"

const In = {
    loading: false,
    data: [],
    error: ''
}





export const Reducer = (state = In, action) => {
    switch (action.type) {
        case sendr:
            return {
                ...state, loading: true
            }
            case reciver:
                return {
                    loading: false, data: action.payload, error: ''
                }
                case recivee:
                    return {
                        loading: false, data: [], error: action.payload
                    }

                    default:
                        return state
    }
}