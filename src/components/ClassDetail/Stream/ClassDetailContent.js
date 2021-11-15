import Header from '../../Header/Header'
import { Container } from '@mui/material';
import Card from './Card/Card'
import { TextField } from '@mui/material';
import {default as SubHeader} from '../SubHeader/SubHeader'
const ClassDetail = () => {
    return (
        <div>
            <Header />
            <SubHeader/>
            <Container sx={{ width: '80vw' }} >
                <TextField
                label="Announce something for your class"
                multiline
                rows={5}
                variant="filled"
                fullWidth
            />
                <Card />
                <Card />
            </Container>
        </div>
    );
}

export default ClassDetail