import { ADD_CART, RESET_CART, REMOVE_CART } from "./cartType"

const initialState = {
    carts: [],
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_CART: return {
            ...state,
            carts: [...state.carts, action.payload]
        }
        case REMOVE_CART: return {
            carts: [...state.carts.filter(crt => crt._id !== action.payload)]
        }
        case RESET_CART: return {
            carts: []
        }
        default: return state
    }
}
export default cartReducer;