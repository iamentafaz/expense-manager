import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { IconButton, Link, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { FormInputText } from '../shared/FormInputText';
import { Transition } from '../../utils/ComponentHelper';
import { sagaActions } from '../../redux/redux-saga/sagaActions';
import CloseIcon from '@mui/icons-material/Close';

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

export default function LoginForm({ openForm, onClose, openSignUpForm }) {
    const open = openForm;
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
        onClose();
    };

    const signUpClickHandler = () => {
        handleClose();
        openSignUpForm();
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
                    sx={{
                        // background: '#1976d2',
                        color: '#000',
                        textAlign: 'left',
                    }}
                >
                    Log in
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[900],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent sx={{ pt: '1rem' }} dividers>
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
                <DialogActions sx={{ mt: '1rem', mr: '1rem' }}>
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
                <Typography paragraph align="center" sx={{ fontWeight: '550' }}>
                    New to FinTrk?
                    <Link
                        component="button"
                        onClick={signUpClickHandler}
                        sx={{ ml: '.5rem' }}
                    >
                        Join now
                    </Link>
                </Typography>
            </Dialog>
        </>
    );
}
