import { ADD_CART } from "./cartType"
import {REMOVE_CART} from "./cartType"
import {RESET_CART} from "./cartType"

export const addToCart = (items) => {
    return{
        type: ADD_CART,
        payload: items,
    }
}

export const removeFromCart = (id) => {
    return{
        type: REMOVE_CART,
        payload: id,
    }
}

export const resetCart = () => {
    return {
        type:RESET_CART
    }
}