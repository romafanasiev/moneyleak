import React, { useState } from 'react';
import { IconButton, Dialog } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DateField from '../date-field/date-field.component';

const AddForm: React.FC = function AddForm() {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <AddCircleIcon
          color="secondary"
          sx={{
            height: '50px',
            width: '50px',
          }}
        />
      </IconButton>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClick}
        PaperProps={{
          sx: {
            padding: 3,

            minHeight: '200px',

            backgroundColor: 'primary.main',
          },
        }}
        sx={{
          margin: 'auto',
          borderRadius: '20px',
          height: '300px',
        }}
      >
        <DateField />
      </Dialog>
    </>
  );
};

export default AddForm;
