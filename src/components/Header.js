import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import WalletIcon from '@mui/icons-material/Wallet';
import { Link } from 'react-router-dom';
import './Header.scss';
import LoginForm from './forms/LoginForm';
import SignUpForm from './forms/SignUpForm';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sagaActions } from '../redux/redux-saga/sagaActions';

function Header() {
    const [loginOpen, setLoginOpen] = useState(false);
    const [openSignUpForm, setSignUpForm] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('user_id'),
    );
    const history = useHistory();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    console.log('user', isAuthenticated);
    const loggedOut = () => {
        localStorage.removeItem('user_id');
        history.replace('/');
        dispatch({ type: sagaActions.LOGOUT_USER });
    };

    return (
        <>
            <header className="App-header">
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 1 }}
                            >
                                <WalletIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    fontWeight: 700,
                                    letterSpacing: '1px',
                                }}
                            >
                                <Link
                                    to={isAuthenticated ? '/expenses' : '/'}
                                    className="logo"
                                >
                                    FinTrk
                                </Link>
                            </Typography>
                            {isAuthenticated ? (
                                <Button
                                    color="inherit"
                                    onClick={loggedOut}
                                    sx={{ fontWeight: '600' }}
                                >
                                    Logout
                                </Button>
                            ) : (
                                <Button
                                    color="inherit"
                                    onClick={() => setLoginOpen(true)}
                                    sx={{ fontWeight: '600' }}
                                >
                                    Login
                                </Button>
                            )}
                        </Toolbar>
                    </AppBar>
                </Box>
            </header>
            {loginOpen ? (
                <LoginForm
                    openForm={loginOpen}
                    onClose={() => setLoginOpen(false)}
                    openSignUpForm={() => setSignUpForm(true)}
                />
            ) : null}
            {openSignUpForm ? (
                <SignUpForm
                    openForm={openSignUpForm}
                    onClose={() => setSignUpForm(false)}
                    openLogInForm={() => setLoginOpen(true)}
                />
            ) : null}
        </>
    );
}

export default Header;
