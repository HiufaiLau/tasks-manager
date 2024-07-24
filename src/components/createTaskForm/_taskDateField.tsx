import React, { FC, ReactElement } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { IDateField } from './interfaces/IDateField';
import { TextField } from '@mui/material';

import PropTypes from 'prop-types';
import { TaskSelectField } from './_taskSelectField';

export const TaskDateField: FC<IDateField> = (
  props,
): ReactElement => {
  //  Destructure props
  const {
    value = new Date(),
    disabled = false,
    onChange = (newDate) => console.log(newDate),
  } = props;


  const [date, setDate] = React.useState<Date | null>(null);
  return (

    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Select Date"
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={onChange}
          disabled={disabled}
          renderInput={(params) => (
            <TextField {...params} />
          )}
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};
