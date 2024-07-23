import React, { FC, ReactElement } from 'react';

import { TextField } from '@mui/material';
import { ITextChange } from './interfaces/ITextChange';

export const TaskTitleField: FC<ITextChange> = (props): ReactElement => {
  // Destructure props
  const { onChange = (e) => console.log(e), disabled = false } = props;

  return (
    <TextField
      id="title"
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      onChange={onChange}
      disabled={disabled}
    />
  );
};
