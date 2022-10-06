import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import { TextInput } from '../text-input/text-input.component';
import getValidation from '../../utils/validation/validation-schema';
import FormButton from '../form-button/form-button.component';

type Props = {
  onSubmit: (data: any) => void;
  types: string[];
};

const Form: React.FC<Props> = function Form({ onSubmit, types }) {
  const { handleSubmit, reset, control } = useForm({
    resolver: yupResolver(getValidation(types)),
  });

  return (
    <Stack component="form" gap="20px" sx={{ width: '100%' }}>
      {types.map((type) => {
        return (
          <TextInput
            name={type}
            control={control}
            label={`${type.charAt(0).toUpperCase()}${type.slice(1)}`}
            key={type}
          />
        );
      })}
      <FormButton text="Submit" onClick={handleSubmit(onSubmit)} />
      <FormButton text="Reset" onClick={() => reset()} />
    </Stack>
  );
};

export default Form;
