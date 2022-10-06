import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField, useTheme } from '@mui/material';
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
  const theme = useTheme();
  const [visibility, setVisibility] = useState(false);
  const inputStyles = {
    color: 'primary.main',
    '& :-webkit-autofill': {
      '-webkit-box-shadow': `0 0 0 100px ${theme.palette.secondary.main} inset`,
      '-webkit-text-fill-color': `${theme.palette.primary.main}`,
    },
  };
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
          InputLabelProps={{ sx: inputStyles }}
          InputProps={
            name === 'password'
              ? {
                  sx: inputStyles,
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
