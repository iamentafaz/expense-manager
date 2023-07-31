import React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import {
    SecurityOutlined,
    Groups2Outlined,
    ThumbUpOutlined,
    GradeOutlined,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function Landing(props) {
    const user = useSelector(state => state.user.isAuthenticated);

    if(user) {
        return <Redirect to={'/expenses'}/>
    }

    return (
        <>
            <Box
                sx={{
                    textAlign: 'center',
                    height: {
                        xs: 'calc(100vh - 56px)',
                        sm: 'calc(100vh - 64px)',
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    background: '#060545',
                    color: '#fff',
                }}
            >
                <Typography variant="h3">
                    Tired of <span className="highlight-text">tracking</span>{' '}
                    your <span className="highlight-text">expenses?</span>
                </Typography>
                <Typography variant="h6">
                    <span>FinTrk</span> helps you manage it efficiently
                </Typography>
                <Box sx={{ m: '0 10%', mt: 10 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <Card sx={{ p: '1.5rem' }}>
                                <CardContent>
                                    <SecurityOutlined
                                        fontSize="large"
                                        color="secondary"
                                    ></SecurityOutlined>
                                </CardContent>
                                <Typography
                                    component="div"
                                    gutterBottom
                                    variant="h6"
                                    fontWeight={550}
                                >
                                    100% Secured Data
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card sx={{ p: '1.5rem' }}>
                                <CardContent>
                                    <Groups2Outlined
                                        fontSize="large"
                                        color="secondary"
                                    ></Groups2Outlined>
                                </CardContent>
                                <Typography
                                    component="div"
                                    gutterBottom
                                    variant="h6"
                                    fontWeight={550}
                                >
                                    10+ Million Users
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card sx={{ p: '1.5rem' }}>
                                <CardContent>
                                    <ThumbUpOutlined
                                        fontSize="large"
                                        color="secondary"
                                    ></ThumbUpOutlined>
                                </CardContent>
                                <Typography
                                    component="div"
                                    gutterBottom
                                    variant="h6"
                                    fontWeight={550}
                                >
                                    100k+ Reviews
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card sx={{ p: '1.5rem' }}>
                                <CardContent>
                                    <GradeOutlined
                                        fontSize="large"
                                        color="secondary"
                                    ></GradeOutlined>
                                </CardContent>
                                <Typography
                                    component="div"
                                    gutterBottom
                                    variant="h6"
                                    fontWeight={550}
                                >
                                    App of the Day
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}
