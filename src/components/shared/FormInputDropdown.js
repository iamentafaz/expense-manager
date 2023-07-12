import {
    MenuItem,
    TextField,
} from '@mui/material';
import { Controller } from 'react-hook-form';
const options = [
    {
        value: 'cr',
        label: 'Credit',
    },
    {
        value: 'db',
        label: 'Debit',
    },
];
export const FormInputDropdown = ({ name, control, label }) => {
    const generateSingleOptions = () => {
        return options.map((option) => {
            return (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            );
        });
    };
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    helperText={error ? error.message : null}
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    label={label}
                    variant='outlined'
                    select
                    margin='normal'
                >
                    {generateSingleOptions()}
                </TextField>
            )}
        />
    );
};
