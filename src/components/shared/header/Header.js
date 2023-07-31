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
import LoginForm from '../../forms/LoginForm';
import SignUpForm from '../../forms/SignUpForm';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sagaActions } from '../../../redux/redux-saga/sagaActions';
import { Avatar, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { Logout, AccountCircle } from '@mui/icons-material';

function Header() {
    const [loginOpen, setLoginOpen] = useState(false);
    const [openSignUpForm, setSignUpForm] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const history = useHistory();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const user = useSelector((state) => state.user);

    const loggedOut = () => {
        localStorage.removeItem('user_id');
        history.replace('/');
        handleClose();
        dispatch({ type: sagaActions.LOGOUT_USER });
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
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
                                <>
                                    <IconButton onClick={handleMenu}>
                                        <Avatar sx={{ bgcolor: '#1e3762' }}>
                                            M
                                        </Avatar>
                                    </IconButton>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        keepMounted
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            <ListItemIcon>
                                                <AccountCircle fontSize="small" />
                                            </ListItemIcon>
                                            My Profile
                                        </MenuItem>
                                        <MenuItem onClick={loggedOut}>
                                            <ListItemIcon>
                                                <Logout fontSize="small" />
                                            </ListItemIcon>
                                            Logout
                                        </MenuItem>
                                    </Menu>
                                </>
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
