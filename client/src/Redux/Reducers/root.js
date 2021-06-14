import { combineReducers } from "redux";
import ProductReducers from "./Products";
const RootReducer = combineReducers({
    product : ProductReducers
});
export default RootReducer;