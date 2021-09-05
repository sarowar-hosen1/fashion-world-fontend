import {
    ORDER_REQUEST,
    ORDER_SUCCESS,
    ORDER_FAILURE,
    ORDER_DELETE
} from "./orderType"


const initialState = {
    loading: false,
    order: [],
    error: ""
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_REQUEST: return {
            ...state,
            loading: true,
        }
        case ORDER_SUCCESS: return {
            loading: false,
            order: action.payload,
            error: ""
        }
        case ORDER_FAILURE: return {
            loading: false,
            order: [],
            error: action.payload,
        }
        case ORDER_DELETE : return {
            order:[...state.order.filter(ord => ord._id !== action.payload)]
        }
        default: return state;
    }
}

export default orderReducer;