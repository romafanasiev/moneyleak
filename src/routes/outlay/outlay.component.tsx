import React from 'react';
import {
  Box,
  // Table,
  // TableBody,
  // TableCell,
  // TableContainer,
  // TableRow,
} from '@mui/material';
import Balance from '../../components/balance/balance.component';
import SelectPeriod from '../../components/select-period/select-period.component';
import { mainContainerStyles } from '../../utils/styles/login-modal.styles';
import AddForm from '../../components/add-form/add-form.component';

const OutlayPage: React.FC = function OutlayPage() {
  return (
    <Box sx={mainContainerStyles}>
      <Balance />
      <div>
        <SelectPeriod />
        <p>Expenses</p>
        <p>Incomes</p>
      </div>
      <div>
        <p>Expenses filter</p>
        <p>Incomes filter</p>
      </div>
      <h3>STATISTIC</h3>
      {/* <TableContainer>
        <Table>
          <TableBody>
            {categories.map((category) => {
              return (
                <TableRow hover key={category}>
                  <TableCell>{category}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer> */}
      <AddForm />
    </Box>
  );
};

export default OutlayPage;
