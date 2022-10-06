import { Button } from '@mui/material';
import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
};

const FormButton: React.FC<Props> = function FormButton({ onClick, text }) {
  return (
    <Button onClick={onClick} color="primary" variant="outlined" fullWidth>
      {text}
    </Button>
  );
};

export default FormButton;
