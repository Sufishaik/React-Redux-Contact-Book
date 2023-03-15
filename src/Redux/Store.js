// import process from "process";
import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import RootReducer from "./RootReducer";

const middleWares = [reduxThunk];

if(process.env.NODE_Env === "development") {
    middleWares.push(logger);
}

const Store = createStore(RootReducer, applyMiddleware(...middleWares));

export default Store;
