import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";

import { ListClasses } from "./ListClasses";
import { SpeedDial } from "../";
import LinearProgress from "@mui/material/LinearProgress";
import {  getAllClass } from "../../api";


export const ClassesContent = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => GetAllClass(), []);
  const GetAllClass = async () => {
    setLoading(true);
    const data = await getAllClass();

    if (data) setClasses(data);
    setLoading(false);
  };
  return (
    <Container maxWidth="xl" sx={{ marginTop: 2 }}>
      {loading ? <LinearProgress /> : <ListClasses classes={classes} />}
      <SpeedDial />
    </Container>
  );
};
