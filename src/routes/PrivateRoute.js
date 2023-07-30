import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const userIsAuthenticated = useSelector(
        (state) => state.user.isAuthenticated,
    );
    const location = useLocation();

    return (
        <Route {...rest}>
            {userIsAuthenticated === true ? (
                <Component />
            ) : (
                <Redirect to={{ pathname: '/', state: { from: location } }} />
            )}
        </Route>
    );
};

export default PrivateRoute;
