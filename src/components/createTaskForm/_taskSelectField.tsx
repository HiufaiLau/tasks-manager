import React, { FC, ReactElement } from 'react';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
  } from '@mui/material';
  
  
  import { ISelectField } from './interfaces/ISelectField';
  
  export const TaskSelectField: FC = (
    props,
  ): ReactElement => {
    
    return (
      <FormControl fullWidth size="small">
        <InputLabel id="status">Status</InputLabel>
        <Select
        labelId='status'
        id='status-select'
        value=""
        label="Status"
        name='status'
        >
         <MenuItem value={10}>Ten</MenuItem>
         <MenuItem value={20}>Twenty</MenuItem>
         <MenuItem value={30}>Thirdy</MenuItem>
        </Select>
      </FormControl>
    );
  };