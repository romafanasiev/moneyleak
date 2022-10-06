import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type Props = {
  name: string;
  control: Control<FieldValues, any>;
  label: string;
};

export const TextInput: React.FC<Props> = function TextInput({
  name,
  control,
  label,
}) {
  const [visibility, setVisibility] = useState(false);
  const inputStyles = { color: 'primary.main', outline: 'none' };
  let fieldType = 'text';

  if (name === 'password') {
    fieldType = visibility ? 'text' : 'password';
  }

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          onChange={onChange}
          value={value}
          label={label}
          type={fieldType}
          error={!!error}
          helperText={error ? error.message : null}
          fullWidth
          autoComplete="off"
          InputLabelProps={{ sx: inputStyles }}
          InputProps={
            name === 'password'
              ? {
                  sx: { color: 'primary.main' },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setVisibility(!visibility)}
                        edge="end"
                      >
                        {visibility ? (
                          <VisibilityOff color="primary" />
                        ) : (
                          <Visibility color="primary" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : { sx: inputStyles }
          }
        />
      )}
    />
  );
};

export default TextInput;
