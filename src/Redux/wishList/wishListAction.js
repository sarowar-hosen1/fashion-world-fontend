import { ADD_WISH } from "./wishListType"
import { REMOVE_FROM_WISH_LIST } from "./wishListType"

export const addToWish = (items) => {
    return {
        type: ADD_WISH,
        payload: items
    }
}

export const removeFromWish = (id) => {
    return {
        type: REMOVE_FROM_WISH_LIST,
        payload: id
    }
}