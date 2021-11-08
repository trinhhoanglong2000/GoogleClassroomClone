import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import axios from "axios";
import { ListClasses } from "./ListClasses";
import LinearProgress from "@mui/material/LinearProgress";

import { URL } from "../../api";
export const ClassesContent = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    setLoading(true);
    axios
       
      .get( `${URL}/classes`)
      .then((res) => {
        console.log(res.data);
        setClasses(res.data);
        setLoading(false);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container maxWidth="xl" sx={{ marginTop: 2 }}>
      
      { loading? <LinearProgress />:<ListClasses classes={classes} /> }
    </Container>
  );
};
