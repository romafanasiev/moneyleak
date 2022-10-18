import React from 'react';
import { Stack } from '@mui/material';
import { Control, FieldValues } from 'react-hook-form';
import categories from '../../utils/categories/category';
import CurrencySelect from '../currency-select/currency-select.component';
import CurrencyInput from '../currency-input/currency-input.component';

type Props = {
  control: Control<FieldValues, any>;
  uniqKey: number;
};

const CurrencyField: React.FC<Props> = function CurrencyField({
  control,
  uniqKey,
}) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
      <CurrencySelect
        uniqKey={uniqKey}
        control={control}
        options={categories}
        name="category"
        sx={{ width: '35%' }}
      />
      <CurrencySelect
        uniqKey={uniqKey}
        control={control}
        options={['Income', 'Expense']}
        name="type"
        sx={{ width: '20%' }}
      />
      <CurrencyInput uniqKey={uniqKey} control={control} />
    </Stack>
  );
};

export default CurrencyField;
