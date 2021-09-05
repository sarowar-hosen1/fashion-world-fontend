import { ADD_WISH, REMOVE_FROM_WISH_LIST } from "./wishListType"

const initialState = {
    wish: [],
}

const wishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WISH:
            return {
                wish: [...state.wish, action.payload],
            }
        case REMOVE_FROM_WISH_LIST: 
        return {
            wish: [...state.wish.filter(item => item._id !== action.payload)]
        }
        default: return state
    }
}
export default wishListReducer