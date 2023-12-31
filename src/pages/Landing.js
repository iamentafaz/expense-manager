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
import { TypeAnimation } from 'react-type-animation';

export default function Landing(props) {
    const user = useSelector((state) => state.user.isAuthenticated);

    if (user) {
        return <Redirect to={'/expenses'} />;
    }

    const LandingText = () => {
        return (
            <TypeAnimation
                sequence={[
                    'Tired of tracking your expenses',
                    1000,
                    'We make it simple for you',
                    1200,
                    () => {
                        console.log('Sequence completed');
                    },
                ]}
                repeat={Infinity}
                className="highlight-text"
            />
        );
    };

    return (
        <>
            <Box
                sx={{
                    textAlign: 'center',
                    height: {
                        // md: 'calc(100vh - 64px)',
                        sm: 'calc(100vh - 64px)',
                        xs: '100%',
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    background: '#060545',
                    color: '#fff',
                    padding: {
                        xs: '2rem 0',
                    },
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: {
                            sm: '3rem',
                            xs: '2rem',
                        },
                    }}
                >
                    <LandingText />
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
