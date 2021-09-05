import {
    PRODUCTS_REQUEST,
    PRODUCTS_SUCCESS,
    PRODUCTS_ERROR,
    DELETE_PRODUCT
} from "./productsType";

export const productsRequest = () => {
    return {
        type: PRODUCTS_REQUEST,
    }
}

export const productsSuccess = (products) => {
    return {
        type: PRODUCTS_SUCCESS,
        payload: products
    }
}

export const productsError = (error) => {
    return {
        type: PRODUCTS_ERROR,
        payload: error
    }
}

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}

