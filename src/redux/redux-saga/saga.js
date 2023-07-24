import { takeEvery, call, put, all } from 'redux-saga/effects';
import { sagaActions } from './sagaActions';
import { getExpenses, apiFailure } from '../slices/expenseSlice';

import { auth, db } from '../../firebase';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import dayjs from 'dayjs';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { signUp, login, logout } from '../slices/userSlice';

const callGetApi = async () => {
    const q = query(
        collection(db, 'expenses'),
        where('user_id', '==', localStorage.getItem('user_id')),
    );
    const querySnapshot = await getDocs(q);
    const newData = querySnapshot.docs.map((doc) => {
        const data = { ...doc.data() };
        // if ('date' in data) {
        //     const fireBaseTime = new Date(
        //         data.date.seconds * 1000 + data.date.nanoseconds / 1000000,
        //     );
        //     const date = dayjs(fireBaseTime.toDateString()).format('LL');
        //     data.date = date;
        // }
        return { ...data, id: doc.id };
    });
    return newData;
};

const callPostApi = async ({ body }) => {
    const querySnapshot = await addDoc(collection(db, 'expenses'), body);
    const newData = { id: querySnapshot.id };
    return newData;
};

function* fetchUserExpenses() {
    try {
        let result = yield call(() => callGetApi());
        yield put(getExpenses(result));
    } catch (e) {
        yield put({ type: sagaActions.EXPENSE_FETCH_FAILED, error: e });
    }
}

function* addUserExpense(body) {
    try {
        yield call(() => callPostApi(body));
        yield put({ type: sagaActions.FETCH_USER_EXPENSES });
    } catch (e) {
        yield put({ type: sagaActions.EXPENSE_ADD_FAILED, error: e });
    }
}

function* apiFailed(response) {
    yield put(apiFailure(response.error));
}

const callSignUpApi = async ({ email, password }) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User', user);
    return user;
};

function* signUpUser(body) {
    try {
        const user = yield call(() => callSignUpApi(body.user));
        yield put(signUp(user));
    } catch (e) {
        yield put({ type: sagaActions.SIGNUP_FAILED, error: e });
    }
}

const callLogInApi = async ({ email, password }) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user.user;
};

function* loginUser(body) {
    try {
        const user = yield call(() => callLogInApi(body.user));
        yield put(login(user));
        yield put({ type: sagaActions.FETCH_USER_EXPENSES });
    } catch (e) {
        yield put({ type: sagaActions.LOGIN_FAILED, error: e });
    }
}

function* logoutUserSaga() {
    try {
        yield put(logout());
    } catch (error) {
        yield put({ type: sagaActions.LOGIN_FAILED, error: e });
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(sagaActions.FETCH_USER_EXPENSES, fetchUserExpenses),
        takeEvery(sagaActions.ADD_USER_EXPENSE, addUserExpense),
        takeEvery(sagaActions.EXPENSE_FETCH_FAILED, apiFailed),
        takeEvery(sagaActions.EXPENSE_ADD_FAILED, apiFailed),
        takeEvery(sagaActions.SIGNUP_USER, signUpUser),
        takeEvery(sagaActions.LOGIN_USER, loginUser),
        takeEvery(sagaActions.LOGOUT_USER, logoutUserSaga),
    ]);
}
