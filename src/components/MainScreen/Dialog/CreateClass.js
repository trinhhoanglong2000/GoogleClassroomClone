import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";

import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";

// import { default as UseContext } from "../../Context/context";
import { createClass } from "../../../api";
export default function CreateClass({ open, onClose }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    name: "",
    Section: "",
    Subject: "",
    Room: "",
  });

  const handleClickCreate = async () => {
    let result = {};
    if (input.name == null) alert("Class name is required");
    else {
      setLoading(true);

      try {
        result = await createClass(
          input.name,
          input.Section,
          input.Subject,
          input.Room
        );

      } catch (error) {
        console.log(error);
      }
      if (result.success) {
        //If Success then Redirect to Class detail
        navigate(`/ClassDetail/${result.id}`)

      } else {
        if (result.message === "jwt expired") {
          localStorage.clear();
          navigate('Login')
        }
      }
      setLoading(false);
      onClose();
    }
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Create class</DialogTitle>
        <DialogContent>
          {loading && <LinearProgress />}

          <TextField
            autoFocus
            name="name"
            margin="dense"
            id="class"
            label="Class Name"
            type="text"
            fullWidth
            variant="standard"
            required
            onChange={handleChange}
            value={input.name}
          />
          <TextField
            name="Section"
            margin="dense"
            id="section"
            label="Section"
            type="text"
            fullWidth
            variant="standard"
            value={input.Section}
            onChange={handleChange}
          />
          <TextField
            name="Subject"
            margin="dense"
            id="subject"
            label="Subject"
            type="text"
            fullWidth
            variant="standard"
            value={input.Subject}
            onChange={handleChange}
          />
          <TextField
            name="Room"
            margin="dense"
            id="room"
            label="Room"
            type="text"
            fullWidth
            variant="standard"
            value={input.Room}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleClickCreate} disabled={loading}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
