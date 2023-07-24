import { Box, Typography } from '@mui/material';

export default function Landing(props) {
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
                    background: '#000',
                    color: '#fff',
                }}
            >
                <Typography variant="h3" color="secondary">
                    Tired of tracking your expenses?
                </Typography>
                <Typography variant="h6">
                    <span>FinTrk</span> helps you manage it efficiently
                </Typography>
            </Box>
        </>
    );
}
