/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { IconButton, Dialog, Button, Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useForm } from 'react-hook-form';
import DateField from '../date-field/date-field.component';
import CurrencyField from '../currency-field/currency-field.component';
import FormButton from '../form-button/form-button.component';

const AddForm: React.FC = function AddForm() {
  const [open, setOpen] = useState(true);
  const [formFields, setFormFields] = useState<string[]>([]);
  const { handleSubmit, control } = useForm();

  const handleClick = () => {
    setOpen(!open);
  };

  const onClick = () => {
    setFormFields([...formFields, 'number']);
  };

  const onSubmit = (data: any) => {
    console.log(data);
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

            // minHeight: '200px',
            // height: 'fit-content',

            backgroundColor: 'primary.main',
          },
        }}
        sx={{
          margin: 'auto',
          borderRadius: '20px',
          height: '300px',
        }}
      >
        <Stack spacing={2}>
          <DateField control={control} />
          <Button
            color="secondary"
            variant="contained"
            sx={{ maxWidth: '210px', textTransform: 'none' }}
            onClick={onClick}
          >
            Add category
          </Button>
          <Stack spacing={2} sx={{ width: '100%', backgroundColor: 'red' }}>
            {formFields.map((field, index) => {
              return (
                <CurrencyField control={control} key={index} uniqKey={index} />
              );
            })}
            <FormButton text="Submit" onClick={handleSubmit(onSubmit)} />
          </Stack>
        </Stack>
      </Dialog>
    </>
  );
};

export default AddForm;
