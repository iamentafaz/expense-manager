import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FormInputText } from './shared/FormInputText';
import { FormInputDropdown } from './shared/FormInputDropdown';
import { FormInputDate } from './shared/FormInputDate';
import dayjs from 'dayjs';
import { sagaActions } from '../redux/sagaActions';

const expenseForm = {
    amount: '',
    category: '',
    description: '',
    type: '',
    date: dayjs(new Date().toISOString().substring(0, 10)),
};

export default function ExpenseForm(props) {
    const open = props.openForm;
    const dispatch = useDispatch();
    const { handleSubmit, reset, control, setValue, register, formState } = useForm({
        defaultValues: expenseForm,
    });;
    console.log('reg',formState, {...register("amount", { required: true, maxLength: 20 })})

    const addExpenseHandler = (data) => {
        console.log(data, formState);
        // const formatDate = dayjs(data.date.$d).format('DD-MM-YYYY');
        // data.date = formatDate;
        // const expense = {
        //     ...data,
        // };
        // dispatch({ type: sagaActions.ADD_USER_EXPENSE, body: expense });
        // props.onClose();
    };

    const handleClose = () => {
        props.onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                sx: {
                    width: 500,
                },
            }}
        >
            <DialogTitle>Add Expense</DialogTitle>
            <DialogContent>
                <DialogContentText sx={{ mb: '1rem' }}>
                    Track your daily expenses
                </DialogContentText>
                <FormInputDate name='date' control={control} label='Date' />
                <FormInputText
                    name='amount'
                    label='Amount'
                    control={control}
                    type='number'
                />
                <FormInputText
                    name='category'
                    label='Category'
                    control={control}

                />
                <FormInputText
                    name='description'
                    label='Description'
                    control={control}

                />
                <FormInputDropdown name='type' label='Type' control={control} />
            </DialogContent>
            <DialogActions sx={{ mb: '1rem' }}>
                <Button onClick={handleClose} variant='contained' color='error'>
                    Cancel
                </Button>
                <Button
                    onClick={handleSubmit(addExpenseHandler)}
                    variant='contained'
                    color='primary'
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
}
