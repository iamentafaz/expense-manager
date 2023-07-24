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
import { sagaActions } from '../../redux/redux-saga/sagaActions';
import { Transition } from '../../utils/ComponentHelper';
import { useHistory } from 'react-router-dom';

const emailRules = {
    required: { value: true, message: 'Email is required' },
    pattern: {
        value: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g,
        message: 'Provide correct email address',
    },
};
const passwordRules = {
    required: { value: true, message: 'Password is requried' },
    minLength: { value: 6, message: 'Password must have length 6' },
};

export default function SignUpForm(props) {
    const open = props.openForm;
    const dispatch = useDispatch();
    const { handleSubmit, control } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const history = useHistory();

    const signUpClickHandler = (user) => {
        dispatch({ type: sagaActions.SIGNUP_USER, user });
        props.onClose();
        history.push('/expenses');
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
            <DialogTitle
                sx={{ background: '#1976d2', color: '#fff', fontWeight: 5 }}
            >
                Sign up to FinTrk
            </DialogTitle>
            <DialogContent>
                <DialogContentText
                    sx={{ mt: '.5rem', textAlign: 'right', fontSize: '14px' }}
                >
                    (Sign up to FinTrk to start tracking your expenses)
                </DialogContentText>
                <FormInputText
                    name="email"
                    label="Email"
                    control={control}
                    type="email"
                    rules={emailRules}
                />
                <FormInputText
                    name="password"
                    label="Password"
                    control={control}
                    type="password"
                    rules={passwordRules}
                />
            </DialogContent>
            <DialogActions sx={{ my: '1rem', mr: '1rem' }}>
                <Button onClick={handleClose} variant="contained" color="error">
                    Cancel
                </Button>
                <Button
                    onClick={handleSubmit(signUpClickHandler)}
                    variant="contained"
                    color="primary"
                >
                    Agree & Join
                </Button>
            </DialogActions>
        </Dialog>
    );
}
