import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Header from '../Header/Header'
import Typography from "@mui/material/Typography";
import { Navigate } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import { getGrade } from "../../api";
import GradeTable from "./GradeTable/GradeTable"
export const ShowGrade = () => {
    const [loading, setLoading] = useState(false);
    const [auth, setAuth] = useState(true);


    const [value, setValue] = useState([]);

    useEffect(() => {
        GetAllGrade();
        return () => {
            setAuth(false);
            setValue({})
            setLoading(false)
        };
    }, []);
    const GetAllGrade = async () => {
        setLoading(true);
        let data = {};

        try {
            data = await getGrade();
        } catch (error) {
            console.log(error);
        }
        if (data.success) {
            
             await setValue(data.data);
        } else {
            if (data.message === "jwt expired") localStorage.clear();
            setAuth(false);
        }
        setLoading(false);
    };
    return (
        <div>
            <Header />
            {!auth && <Navigate to="/login" />}

            {loading && <LinearProgress sx={{ position: "fixed", top: 64, width: '100vw' }} />}

            <Container sx={{ width: "80vw" }}>
                <Container>
                    <Typography dx={{ marginTop: '10px' }} variant="h4">Assignment</Typography>
                    <GradeTable data={value}/>
                </Container>
            </Container>
            <div></div>
        </div>
    );
};
