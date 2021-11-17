import React, { useEffect, useState } from "react";

import { Container } from "@mui/material";
import Card from "./Card/Card";
import { TextField } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { useParams, Navigate } from "react-router-dom";
import { getAllAccountFromClass } from "../../../api";

const ClassDetail = () => {
  const params = useParams();
  const [auth, setAuth] = useState(true);
  const [classes, setClasses] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    GetAllClass();
    return () => {
      setAuth(false);
      setClasses({});
      setLoading(false);
    };
  }, []);
  const GetAllClass = async () => {
    setLoading(true);
    let data = {};

    try {
      data = await getAllAccountFromClass(params.id);
    } catch (error) {
      console.log(error);
    }
    if (data.success) {
      const teacher = data.data.filter((word) => word.type === true);

      const student = data.data.filter((word) => word.type === false);
      await setClasses({ teacher: teacher, student: student });
    } else {
      if (data.message === "jwt expired") localStorage.clear();
      setAuth(false);
    }
    setLoading(false);
  };

  return (
    <div>
      {!auth && <Navigate to="/login" />}

      {loading && (
        <LinearProgress sx={{ position: "fixed", top: 64, width: "100vw" }} />
      )}
      <Container sx={{ width: "80vw" }}>
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
};

export default ClassDetail;
