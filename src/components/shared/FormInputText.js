import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

export const FormInputText = (props) => {
    const { name, control, label, type = 'text', rules } = props;
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
                return (
                    <TextField
                        helperText={error ? error.message : null}
                        error={!!error}
                        onChange={onChange}
                        value={value}
                        fullWidth
                        label={label}
                        type={type}
                        variant="outlined"
                        margin="normal"
                    />
                );
            }}
        />
    );
};
