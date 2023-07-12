import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

export const FormInputText = ({ name, control, label, type = 'text' }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error },
                formState,
            }) => (
                <TextField
                    helperText={error ? error.message : null}
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    label={label}
                    type={type}
                    variant='outlined'
                    margin='normal'
                />
            )}
        />
    );
};
