import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { ListClasses } from './ListClasses';
export const Content = () => {
    return (
        <Container maxWidth='xl' sx={{marginTop: 2}}>
            <ListClasses/>
        </Container>
    )
}
