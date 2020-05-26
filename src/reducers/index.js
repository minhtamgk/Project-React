import { combineReducers } from "redux";
import cartReducer from "./carts";

const rootReducer = combineReducers({
  cartReducer,
});

export default rootReducer;
