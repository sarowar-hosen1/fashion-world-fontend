import {
    DELETE_PRODUCT,
    PRODUCTS_ERROR,
    PRODUCTS_REQUEST,
    PRODUCTS_SUCCESS
} from "./productsType"


const initialState = {
    loading: false,
    products: [],
    error: ""
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_REQUEST: return {
            ...state,
            loading: true,
        }
        case PRODUCTS_SUCCESS: return {
            loading: false,
            products: action.payload,
            error: ""
        }
        case PRODUCTS_ERROR: return {
            loading: false,
            products: [],
            error: action.payload
        }
        case DELETE_PRODUCT: return {
            products:[...state.products.filter(pd => pd._id !== action.payload)]
        }
        default: return state;
    }
}

export default productsReducer;