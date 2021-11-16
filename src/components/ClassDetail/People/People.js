import React, { useEffect, useState } from "react";

import Header from '../../Header/Header'
import List from './List/List'
import { Container } from '@mui/material';
import { default as SubHeader } from '../SubHeader/SubHeader'
import Typography from '@mui/material/Typography';
import { useParams, Navigate } from 'react-router-dom'
import LinearProgress from "@mui/material/LinearProgress";
import { getAllAccountFromClass } from '../../../api'
import { getAllClass } from "../../../api";
export const People = () => {

    const params = useParams();
    const [auth, setAuth] = useState(true)
    const [classes, setClasses] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => GetAllClass(), []);
    const GetAllClass = async () => {
        setLoading(true);
        let data = {}
        
        try {
            data = await getAllAccountFromClass(params.id);

        } catch (error) {
            console.log(error);
        }
        if (data.success) {
            const teacher = data.data.filter(word => word.type === true);
            console.log(teacher)
            const student = data.data.filter(word => word.type === false);
            await setClasses({teacher: teacher, student:student})

            
        }
    else {

    if (data.message === "jwt expired")
        localStorage.clear();
    setAuth(false);

}
setLoading(false);
  };
return (
    <div>
        
        {!auth && <Navigate to="/login" />}

        <Header />
        {loading && <LinearProgress />}
        <SubHeader />
        <Container sx={{ width: '80vw' }} >
            <Container>
                <Typography variant="h4">Teacher</Typography>

                <List data={classes.teacher} />
            </Container>

            <Container>
                <Typography variant="h4">Student</Typography>
                <List data={classes.student} />
            </Container>

        </Container>
        <div>

        </div>
    </div>
);
}

