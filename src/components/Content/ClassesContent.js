import React from 'react'
import Container from '@mui/material/Container';


import { ListClasses } from './ListClasses';
export const ClassesContent = ({classes}) => {
    return (
        <Container maxWidth='xl' sx={{marginTop: 2}}>
            <ListClasses classes={classes}/>
        </Container>
    )
}
