import React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "./ToggleButton/ToggleButton";
import SpeedDial from "./SpeedDial/SpeedDial";

const SubHeader = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "10px",width:'100vw' }}
      >
        <ToggleButton />
      </Box>
      <SpeedDial></SpeedDial>
    </>
  );
};

export default SubHeader;
