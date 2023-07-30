import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NoMatchFound = () => {
    const userIsAuthenticated = useSelector(
        (state) => state.user.isAuthenticated,
    );

    return (
        <Container>
            <Box sx={{ my: '10%' }}>
                <Typography variant="h3" textAlign="center">
                    <strong>Sorry!</strong> the requested url doesn't exist
                </Typography>
                <Typography variant="h5" textAlign="center">
                    Go back to{' '}
                    <Link to={userIsAuthenticated ? '/expenses' : '/'}>
                        homepage
                    </Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default NoMatchFound;
