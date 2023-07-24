import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { FormInputText } from '../shared/FormInputText';
import { Transition } from '../../utils/ComponentHelper';
import { sagaActions } from '../../redux/redux-saga/sagaActions';

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

export default function LoginForm(props) {
    const open = props.openForm;
    const { handleSubmit, control } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const history = useHistory();
    const dispatch = useDispatch();

    const userLoginHandler = (user) => {
        dispatch({ type: sagaActions.LOGIN_USER, user });
        handleClose();
        history.push('/expenses');
    };

    const handleClose = () => {
        props.onClose();
    };

    const signUpClickHandler = () => {
        handleClose();
        props.openSignUpForm();
    };

    return (
        <>
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
                    Log in
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        sx={{
                            mt: '.5rem',
                            textAlign: 'right',
                            fontSize: '14px',
                        }}
                    >
                        (Login to FinTrack to start tracking your expenses)
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
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="error"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit(userLoginHandler)}
                        variant="contained"
                        color="primary"
                    >
                        Login
                    </Button>
                </DialogActions>
                <Typography
                    paragraph
                    color="tertiary"
                    align="center"
                    sx={{ fontWeight: '600' }}
                >
                    New to FinTrk?
                    <Button variant="text" onClick={signUpClickHandler}>
                        Join now
                    </Button>
                </Typography>
            </Dialog>
        </>
    );
}
