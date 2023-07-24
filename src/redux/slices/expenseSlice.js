import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    expenses: [],
    loading: false,
    error: null,
};

export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
        },
        editExpense: (state, action) => {},
        deleteExpense: (state, action) => {},
        getExpenses: (state, action) => {
            state.expenses = action.payload;
        },
        apiFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    addExpense,
    editExpense,
    deleteExpense,
    getExpenses,
    apiFailure,
} = expenseSlice.actions;

export default expenseSlice.reducer;
