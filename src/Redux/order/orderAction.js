import {
    ORDER_REQUEST,
    ORDER_SUCCESS,
    ORDER_FAILURE,
    ORDER_DELETE
} from "./orderType";

export const orderRequest = () => {
    return {
        type: ORDER_REQUEST,
    }
}

export const orderSuccess = (order) => {
    return {
        type: ORDER_SUCCESS,
        payload: order
    }
}

export const orderFailure = (error) => {
    return {
        type: ORDER_FAILURE,
        payload: error
    }
}

export const orderDelete = (id) => {
    return {
        type: ORDER_DELETE,
        payload:id
    }
}