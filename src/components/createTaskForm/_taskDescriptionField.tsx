import React, { FC, ReactElement } from 'react';

import { TextField } from '@mui/material';
import { ITextChange } from './interfaces/ITextChange';


export const TaskDescriptionField:  FC<ITextChange> = (props): ReactElement => {
  // Destructure props
  const { onChange = (e) => console.log(e), disabled = false } = props;

    return (
      <TextField
        id="description"
        name="description"
        label="Description"
        placeholder="Description"
        variant="outlined"
        size="small"
        multiline
        rows={4}
        fullWidth
        onChange={onChange}
        disabled={disabled}
      />
    );
  };
