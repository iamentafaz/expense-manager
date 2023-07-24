import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from 'react-hook-form';
import { Typography } from '@mui/material';

export const FormInputDate = ({ name, control, label }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
                name={name}
                control={control}
                rules={{
                    required: { value: true, message: 'Please select a date' },
                }}
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                }) => {
                    return (
                        <>
                            <DatePicker
                                error={!!error}
                                value={value}
                                onChange={onChange}
                                label={label}
                                disableFuture
                                sx={{ width: '100%' }}
                            />
                            {error ? (
                                <Typography
                                    color="error"
                                    sx={{
                                        fontSize: '0.75rem',
                                        mt: '.5rem',
                                        ml: '.75rem',
                                    }}
                                >
                                    {error.message}
                                </Typography>
                            ) : null}
                        </>
                    );
                }}
            />
        </LocalizationProvider>
    );
};
