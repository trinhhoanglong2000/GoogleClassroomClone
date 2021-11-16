import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ClassCard from "../ClassCard/ClassCard";
export const ListClasses = ({ classes }) => {
  
  return (
    <Grid container spacing={2} justifyContent="flex-start" column={12} >
      {classes.map((item, key) => {
        return (
          <Grid item xs={12} sm={6} md={3} lg={2} key={key} >
            <Box>
              <ClassCard Class={item}/>
            </Box>
          </Grid>
        );
      })}

    </Grid>
  );
};
