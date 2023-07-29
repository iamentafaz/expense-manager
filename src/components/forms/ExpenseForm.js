import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FormInputText } from '../shared/FormInputText';
import { FormInputDropdown } from '../shared/FormInputDropdown';
import { FormInputDate } from '../shared/FormInputDate';
import dayjs from 'dayjs';
import { sagaActions } from '../../redux/redux-saga/sagaActions';
import { Transition } from '../../utils/ComponentHelper';

const amountRules = {
    required: { value: true, message: 'Please enter amount' },
};

const typeRules = {
    required: { value: true, message: 'Please select type' },
};

const categoryRules = {
    required: { value: true, message: 'Please enter category' },
    maxLength: { value: 20, message: 'Category length should be less than 20' },
    minLength: { value: 3, message: 'Category length should be more than 3' },
};

export default function ExpenseForm({ openForm, onClose, defaultFormValue }) {
    const showForm = openForm;
    const dispatch = useDispatch();
    const { handleSubmit, control } = useForm({
        defaultValues: defaultFormValue,
    });

    const addExpenseHandler = (data) => {
        const formatDate = dayjs(data.date.$d).format('LL');
        data.date = new Date(formatDate);
        const expense = {
            ...data,
            user_id: localStorage.getItem('user_id'),
        };
        dispatch({ type: sagaActions.ADD_USER_EXPENSE, body: expense });
        onClose();
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog
            open={showForm}
            onClose={handleClose}
            PaperProps={{
                sx: {
                    width: 500,
                },
            }}
            TransitionComponent={Transition}
            keepMounted
        >
            <DialogTitle
                sx={{
                    background: '#1976d2',
                    color: '#fff',
                    fontWeight: 550,
                    textAlign: 'center',
                }}
            >
                Add Expense
            </DialogTitle>
            <DialogContent>
                <FormInputDate name="date" control={control} label="Date" />
                <FormInputText
                    name="amount"
                    label="Amount"
                    control={control}
                    type="number"
                    rules={amountRules}
                />
                <FormInputDropdown
                    name="type"
                    label="Type"
                    control={control}
                    rules={typeRules}
                />
                <FormInputText
                    name="category"
                    label="Category"
                    control={control}
                    rules={categoryRules}
                />
                <FormInputText
                    name="description"
                    label="Description"
                    control={control}
                    rules={{}}
                />
            </DialogContent>
            <DialogActions sx={{ mb: '1rem', mr: '1rem' }}>
                <Button onClick={handleClose} variant="contained" color="error">
                    Cancel
                </Button>
                <Button
                    onClick={handleSubmit(addExpenseHandler)}
                    variant="contained"
                    color="primary"
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
}
