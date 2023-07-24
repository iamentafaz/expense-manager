import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import ExpenseTable from '../components/ExpenseTable';
import ExpenseForm from '../components/forms/ExpenseForm';
import { sagaActions } from '../redux/redux-saga/sagaActions';
import ExpenseBarChart from '../components/charts/ExpenseBarChart';
import dayjs from 'dayjs';

const expenseForm = {
    amount: '',
    category: '',
    description: '',
    type: 'cr',
    date: dayjs(new Date().toISOString().substring(0, 10)),
};

export default function Expenses() {
    const dispatch = useDispatch();
    const expenses = useSelector((state) => state.expense.expenses);
    const [openForm, setOpenForm] = useState(false);
    const [expenseFormValue, setExpenseFormValue] = useState(expenseForm);

    useEffect(() => {
        dispatch({ type: sagaActions.FETCH_USER_EXPENSES });
    }, [dispatch]);

    const editClickHandler = (id) => {
        const selectedExpense = expenses.filter(
            (expense) => expense.id === id,
        )[0];
        setOpenForm(true);
        setExpenseFormValue((prevState) => ({
            ...selectedExpense,
            date: dayjs(selectedExpense.date.seconds * 1000),
        }));
    };

    return (
        <Box
            sx={{
                margin: '1rem 2rem',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: '.75rem',
                }}
            >
                <Button
                    variant="text"
                    startIcon={<AddIcon />}
                    onClick={() => setOpenForm(true)}
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    Add your expenses
                </Button>
            </Box>
            <ExpenseTable tableData={expenses} onEdit={editClickHandler} />
            {openForm ? (
                <ExpenseForm
                    openForm={openForm}
                    onClose={() => setOpenForm(false)}
                    defaultFormValue={expenseFormValue}
                />
            ) : null}
            <ExpenseBarChart />
        </Box>
    );
}
