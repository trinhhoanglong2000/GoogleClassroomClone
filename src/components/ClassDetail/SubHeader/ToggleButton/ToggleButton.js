import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useNavigate, useParams } from "react-router-dom";
export default function ColorToggleButton() {
    const navigate = useNavigate();
  const [alignment, setAlignment] = React.useState("ios");
  const params = useParams();
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleClick = (e) => {

    navigate(`/ClassDetail/${params.id}/${e.target.value}`)
  };
  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="" onClick={handleClick} sx={{ color: "black" }}>
        {" "}
        Stream
      </ToggleButton>
      <ToggleButton
        value="Classwork"
        onClick={handleClick}
        sx={{ color: "black" }}
      >
        {" "}
        ClassWork
      </ToggleButton>
      <ToggleButton
        value="People"
        onClick={handleClick}
        sx={{ color: "black" }}
      >
        {" "}
        People
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
