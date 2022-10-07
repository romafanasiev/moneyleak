import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  alpha,
  useTheme,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React from 'react';

const periods = ['Week', 'Two weeks', 'Month', 'Quarter', 'Year', 'All time'];

const SelectPeriod: React.FC = function SelectPeriod() {
  const [period, setPeriod] = React.useState(periods[2]);
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="spending-period" color="secondary">
        Spending period
      </InputLabel>
      <Select
        labelId="spending-period"
        value={period}
        label="spending period"
        onChange={handleChange}
        color="secondary"
        IconComponent={CalendarMonthIcon}
        MenuProps={{
          sx: {
            '& .MuiPaper-root': {
              backgroundColor: 'background.default',
            },
            '& .MuiButtonBase-root.MuiMenuItem-root.Mui-selected': {
              backgroundColor: alpha(theme.palette.primary.main, 0.8),
            },
          },
        }}
        sx={{
          '& .MuiSelect-iconOpen': { transform: 'none' },
        }}
      >
        {periods.map((item) => {
          return (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectPeriod;
