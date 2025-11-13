import {
    recivee,
    reciver,
    sendr
} from "./usertype"

const userIn = {
    loading: false,
    data: [],
    error: ''
}

const userReducer = (state = userIn, action) => {
    switch (action.type) {
        case sendr:
            return {
                loading: true, data: [], error: ''
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

export default userReducer