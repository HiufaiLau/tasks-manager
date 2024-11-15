import React, { FC,  ReactElement } from 'react'
import Grid from '@mui/material/Grid'
import { Profile } from '../profile/profile'
import { CreateTaskForm } from '../createTaskForm/createTaskForm'

export const Sidebar: FC = (): ReactElement => {
    return (
        <Grid
            item
            md={4}
            sx={{
                height: '100vh',
                width: '100%',
                backgroundColor: 'background.paper',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Profile name='Alan' />
            < CreateTaskForm />
        </Grid>
    )
}