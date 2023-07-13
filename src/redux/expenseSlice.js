import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    expenses: [],
};

export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
        },
        editExpense: (state, action) => { },
        deleteExpense: (state, action) => { },
        getExpenses: (state, action) => {
            state.expenses = action.payload;
        },
    },
});

export const { addExpense, editExpense, deleteExpense, getExpenses } =
    expenseSlice.actions;

export default expenseSlice.reducer;
