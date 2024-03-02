import {combineReducers} from "redux";
import cartReducer from "./reduces/cartReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
})

export default rootReducer;