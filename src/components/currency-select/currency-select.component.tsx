/* eslint-disable react/no-array-index-key */
import React from 'react';
import { MenuItem, Select, SxProps } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';

type Props = {
  options: string[];
  control: Control<FieldValues, any>;
  uniqKey: number;
  name: string;
  sx?: SxProps;
};

const CurrencySelect: React.FC<Props> = function CurrencySelect({
  options,
  control,
  uniqKey,
  name,
  sx,
}) {
  return (
    <Controller
      render={({ field }) => (
        <Select {...field} sx={sx}>
          {options.map((option, index) => {
            return (
              <MenuItem value={option} key={index}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      )}
      control={control}
      name={`${name}${uniqKey}`}
      defaultValue={options[0]}
    />
  );
};

CurrencySelect.defaultProps = {
  sx: null,
};

export default CurrencySelect;
