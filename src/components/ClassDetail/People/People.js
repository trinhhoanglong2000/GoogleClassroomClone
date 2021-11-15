import Header from '../../Header/Header'
import List from './List/List'
import { Container } from '@mui/material';
import { default as SubHeader } from '../SubHeader/SubHeader'
import Typography from '@mui/material/Typography';
const People = () => {
    return (
        <div>
            <Header />
            <SubHeader />
            <Container sx={{ width: '80vw' }} >
                <Container>
                     <Typography variant="h4">Teacher</Typography>   
                     
                    <List data={["LONG A", "LONG E"]}/>
                </Container>
                
                <Container>
                     <Typography variant="h4">Student</Typography>   
                    <List data={["LONG A", "LONG E"]}/>
                </Container>

            </Container>
            <div>

            </div>
        </div>
    );
}

export default People