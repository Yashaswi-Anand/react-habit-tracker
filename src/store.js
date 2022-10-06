import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger'
import performReducer from "./reducers/performReducers";

const reducers = combineReducers({
    reducer: performReducer
})

const store = createStore(reducers, applyMiddleware(logger));

export default store;