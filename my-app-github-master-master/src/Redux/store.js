import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import userReducer from "./Reducer/userReducer";
import { watchergetUsersaga } from "./saga/getUserSaga";

const Reducer = combineReducers({
    userReducer
})

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(Reducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(watchergetUsersaga);

export default store;