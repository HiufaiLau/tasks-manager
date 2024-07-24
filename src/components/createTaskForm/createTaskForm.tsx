import React, { FC, ReactElement } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { TaskDateField } from './_taskDateField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskSelectField } from './_taskSelectField';
import { TaskTitleField } from './_taskTitleField';
import { Priority } from './enums/Priority';
import { Status } from './enums/Status';

export const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
        
        <Stack
          sx={{ width: '100%' }}
          direction="row"
          spacing={2}
        >
          <TaskSelectField label='Status' name ='status' items = {[
            { value: Status.todo, label: Status.todo.toUpperCase() },
            { value: Status.inProgress, label: Status.inProgress.toUpperCase() },
            { value: Status.completed, label: Status.completed.toUpperCase() },
          ]}/>
          <TaskSelectField label='Priority' name='priority' items={[
            { value: Priority.low, label: Priority.low.toUpperCase() },
            { value: Priority.normal, label: Priority.normal.toUpperCase() },
            { value: Priority.high, label: Priority.high.toUpperCase() },
          ]}/>
        </Stack>
      </Stack>
    </Box>
  );
};