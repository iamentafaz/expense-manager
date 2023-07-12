import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenses: [
        {
            date: '2023-06-10',
            amount: 100,
            type: 'cr',
            category: 'grocery',
            description: 'desc',
            id: Math.random() * 100,
        },
        {
            date: '2023-06-05',
            amount: 200,
            type: 'db',
            category: 'grocery',
            description: 'desc',
            id: Math.random() * 100,
        },
    ]
}

export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addExpense: (state, action) => {

            state.expenses.push(action.payload);
        },
        editExpense: (state, action) => {

        },
        deleteExpense: (state, action) => {

        }
    }
});

export const { addExpense, editExpense, deleteExpense } = expenseSlice.actions;

export default expenseSlice.reducer;