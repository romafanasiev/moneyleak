import React, { useState } from 'react';
import { IconButton, Modal, Box } from '@mui/material';
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
          sx={{ height: '50px', width: '50px' }}
        />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'relative',
            top: '50%',
            left: '50%',

            padding: 3,

            width: '300px',

            backgroundColor: 'primary.main',
            borderRadius: '20px',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <DateField />
        </Box>
      </Modal>
    </>
  );
};

export default AddForm;
