/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DateField = function DateField() {
  const [value, setValue] = React.useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Choose date"
        views={['year', 'month', 'day']}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        showDaysOutsideCurrentMonth
        InputProps={{ sx: { color: 'secondary' } }}
        // PopperProps={{
        //   sx: {
        //     '& .MuiPickersDay-root': {
        //       backgroundColor: 'none',
        //     },
        //   },
        // }}
        DialogProps={{
          sx: {
            '& .MuiPaper-root': {
              color: 'text',
              backgroundColor: 'background.default',
            },
            '& .MuiButtonBase-root': {
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
