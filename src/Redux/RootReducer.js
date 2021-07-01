import { combineReducers } from "redux";
import cartReducer from "./Cart/CartReducer";
import userReducer from "./User/UserReducer";


export default combineReducers({
    user: userReducer,
    cart: cartReducer,
});