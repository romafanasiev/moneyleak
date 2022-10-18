/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { InputAdornment, InputLabel } from '@mui/material';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { Control, Controller, FieldValues } from 'react-hook-form';

type Props = {
  control: Control<FieldValues, any>;
};

const DateField: React.FC<Props> = function DateField({ control }) {
  return (
    <Controller
      render={({ field: { onChange, value } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <InputLabel sx={{ color: 'secondary.main' }}>Choose date</InputLabel>
          <DatePicker
            views={['year', 'month', 'day']}
            value={value}
            orientation="portrait"
            onChange={onChange}
            renderInput={(params) => <TextField {...params} fullWidth />}
            showDaysOutsideCurrentMonth
            InputProps={{
              color: 'secondary',
              endAdornment: (
                <InputAdornment
                  component={InsertInvitationIcon}
                  position="start"
                  sx={{
                    color: 'secondary',
                    height: '24px',
                  }}
                />
              ),
            }}
            DialogProps={{
              sx: {
                '& .MuiPaper-root': {
                  color: 'text',
                  backgroundColor: 'background.default',
                },
                '& .MuiButtonBase-root': {
                  color: 'text.primary',
                },
                '& .MuiDialogContent-root': {
                  color: 'text.primary',
                },
                '& .MuiPickersDay-root': {
                  backgroundColor: 'background.default',
                },
              },
            }}
          />
        </LocalizationProvider>
      )}
      control={control}
      name="date"
      defaultValue={dayjs()}
    />
  );
};

export default DateField;
