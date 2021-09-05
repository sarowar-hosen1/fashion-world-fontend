import { combineReducers } from "redux"
import adminReducer from "./admin/adminReducer"
import cartReducer from "./cartItems/cartReducer"
import orderReducer from "./order/orderReducer"
import productsReducer from "./products/productsReducer"
import wishListReducer from "./wishList/wishListReducer"

export const rootReducer = combineReducers({
    myProducts: productsReducer,
    cartItems: cartReducer,
    wishItems: wishListReducer,
    order:orderReducer,
    admin: adminReducer
})