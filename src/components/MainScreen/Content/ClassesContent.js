import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";

import { ListClasses } from "./ListClasses";
import { SpeedDial } from "../../";
import LinearProgress from "@mui/material/LinearProgress";
import { getAllClass } from "../../../api";
import { Navigate} from "react-router-dom";

export const ClassesContent = () => {
  const [auth,setAuth] = useState(true)
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => GetAllClass(), []);
  const GetAllClass = async () => {
    setLoading(true);
    let data={}
    try {
      data = await getAllClass();

      
    } catch (error) {
      console.log(error);
    }
    if (data.success) setClasses(data.data)
    else{
      
      if (data.message ==="jwt expired")
        localStorage.clear();
      setAuth(false);

    }
    setLoading(false);
  };
  return (
    <>
    {!auth && <Navigate to="/login"/>}
    
    <Container maxWidth="xl" sx={{ marginTop: 2,marginLeft:'5px!important',marginRight:'5px!important' }}>
      {loading ? <LinearProgress /> : <ListClasses classes={classes} />}
      <SpeedDial />
    </Container>
    </>
  );
};
