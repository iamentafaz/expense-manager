import React from 'react';
import { Slide } from '@mui/material';

export const Transition = React.forwardRef(function Transitios(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});
