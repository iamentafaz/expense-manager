import { takeEvery, call, put, all, fork } from 'redux-saga/effects';
import { sagaActions } from './sagaActions';
import { getExpenses } from './expenseSlice';

import { db } from '../firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';

const callGetApi = async () => {
    const querySnapshot = await getDocs(collection(db, 'expenses'));
    const newData = querySnapshot.docs.map((doc) => {
        const data = { ...doc.data() };
        if ('date' in data) {
            const fireBaseTime = new Date(
                data.date.seconds * 1000 + data.date.nanoseconds / 1000000
            );
            const date = fireBaseTime.toDateString();
            data.date = date;
        }
        return { ...data, id: doc.id };
    });
    return newData;
};

const callPostApi = async ({ body }) => {
    const querySnapshot = await addDoc(collection(db, 'expenses'), body);
};

function* fetchUserExpenses() {
    try {
        let result = yield call(() => callGetApi());
        yield put(getExpenses(result));
    } catch (e) {
        yield put({ type: 'EXPENSE_FETCH_FAILED' });
    }
}

function* addUserExpense(body) {
    console.log('body', body);
    try {
        let result = yield call(() => callPostApi(body));
        yield put({ type: sagaActions.FETCH_USER_EXPENSES });
    } catch (e) {
        yield put({ type: 'EXPENSE_FETCH_FAILED' });
    }
}

// function* fetchUserExpensesSaga() {
//     yield takeEvery(sagaActions.FETCH_USER_EXPENSES, fetchUserExpenses);
// }

export default function* rootSaga() {
    yield all([
        takeEvery(sagaActions.FETCH_USER_EXPENSES, fetchUserExpenses),
        takeEvery(sagaActions.ADD_USER_EXPENSE, addUserExpense),
    ]);
    // yield fork(fetchUserExpensesSaga)
}
