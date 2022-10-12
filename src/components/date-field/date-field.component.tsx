/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { InputAdornment } from '@mui/material';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';

const DateField = function DateField() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        views={['year', 'month', 'day']}
        value={value}
        orientation="portrait"
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} fullWidth sx={{ position: 'relative' }} />
        )}
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
  );
};

export default DateField;
