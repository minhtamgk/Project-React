import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const stateFromStorage = JSON.parse(localStorage.getItem("redux_store")) || {};
const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, stateFromStorage, middleware);
export default store;
