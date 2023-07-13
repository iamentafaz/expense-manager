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
import { Slide } from '@mui/material';

const expenseForm = {
    amount: '',
    category: '',
    description: '',
    type: '',
    date: dayjs(new Date().toISOString().substring(0, 10)),
};

const amountRules = {
    required: { value: true, message: 'Please enter amount' },
};

const typeRules = {
    required: { value: true, message: 'Please select type' },
}

const categoryRules = {
    required: { value: true, message: 'Please enter category' },
    maxLength: { value: 20, message: 'Category length should be less than 20' },
    minLength: { value: 3, message: 'Category length should be more than 3' },
};

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

export default function ExpenseForm(props) {
    const open = props.openForm;
    const dispatch = useDispatch();
    const { handleSubmit, reset, control, setValue, register, formState } = useForm({
        defaultValues: expenseForm,
    });;

    const addExpenseHandler = (data) => {
        const formatDate = dayjs(data.date.$d).format('LL');
        data.date = new Date(formatDate);
        const expense = {
            ...data,
        };
        dispatch({ type: sagaActions.ADD_USER_EXPENSE, body: expense });
        props.onClose();
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
            TransitionComponent={Transition}
            keepMounted
        >
            <DialogTitle sx={{ background: '#1976d2', color: '#fff', fontWeight: 5 }}>Add Expense</DialogTitle>
            <DialogContent>
                <DialogContentText sx={{ m: '1rem', textAlign: 'right', fontSize: '12px' }}>
                    (Track your daily expenses)
                </DialogContentText>
                <FormInputDate name='date' control={control} label='Date' />
                <FormInputText
                    name='amount'
                    label='Amount'
                    control={control}
                    type='number'
                    rules={amountRules}
                />
                <FormInputDropdown name='type' label='Type' control={control} rules={typeRules} />
                <FormInputText
                    name='category'
                    label='Category'
                    control={control}
                    rules={categoryRules}
                />
                <FormInputText
                    name='description'
                    label='Description'
                    control={control}
                    rules={{}}
                />
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
