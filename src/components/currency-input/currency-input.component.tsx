import React from 'react';
import { TextField } from '@mui/material';
import currency from 'currency.js';
import { Control, Controller, FieldValues } from 'react-hook-form';

type Props = {
  control: Control<FieldValues, any>;
  uniqKey: number;
};

const CurrencyInput: React.FC<Props> = function CurrencyInput({
  uniqKey,
  control,
}) {
  return (
    <Controller
      name={`count${uniqKey}`}
      control={control}
      defaultValue={0}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          color="secondary"
          onChange={onChange}
          value={currency(value).value}
          label="Enter value"
          type="number"
          error={!!error}
          helperText={error ? error.message : null}
          sx={{ width: '25%' }}
        />
      )}
      rules={{
        min: {
          value: 0.01,
          message: 'Enter correct value',
        },
        required: true,
      }}
    />
  );
};

export default CurrencyInput;
