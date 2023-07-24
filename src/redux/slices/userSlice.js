import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signUp: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem('user_id', action.payload.uid);
        },
        logout: (state, action) => {
            state.isAuthenticated = false;
            state.user = {};
        },
    },
});

export const { signUp, login, logout } = userSlice.actions;

export default userSlice.reducer;
