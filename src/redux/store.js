import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import expenseReducer from './expenseSlice';
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({thunk: false, serializableCheck: false}), sagaMiddleware]

export const store = configureStore({
    reducer: {
        expense: expenseReducer
    },
    middleware,
});

sagaMiddleware.run(saga);

export default store;