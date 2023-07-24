import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import expenseReducer from './slices/expenseSlice';
import createSagaMiddleware from 'redux-saga';
import saga from './redux-saga/saga';
import userSlice from './slices/userSlice';

let sagaMiddleware = createSagaMiddleware();
const middleware = [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
];

export const store = configureStore({
    reducer: {
        expense: expenseReducer,
        user: userSlice,
    },
    middleware,
});

sagaMiddleware.run(saga);

export default store;
