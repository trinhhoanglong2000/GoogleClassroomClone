import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {  useState ,useEffect} from 'react';
import Paper from '@mui/material/Paper'

import { useNavigate } from "react-router-dom";
async function  submitForm(event = null) {
  if (event) {
    event.preventDefault();
  }
  var form = document.querySelector("#createForm");

  var tokenAccess = form.querySelector('input[name="tokenAccess"]').value;
  // var url =
  //   "http://localhost:5000/mail/AccessInviteLink?accessToken=" + tokenAccess;
  let result = null
  var url = `${process.env.REACT_APP_API_URL}/mail/AccessInviteLink?accessToken=${tokenAccess}`
  await fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  })
    .then((response) => response.json())
    .then((responseData) => {
      //alert(responseData["message"]);
      result= responseData
    })
    .catch(function (res) {
      
      alert(res.data);
    });
    return result
}
// export default CreateNew

export default function AccessLink({ openMode, onClose }) {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login");
    }
  }, [navigate]);

  const [tokenAccess, setTokenAccess] = useState(params["accessToken"]);
  const [open, setOpen] = useState(!!params["accessToken"]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    try {
      onClose();
    } catch (err) {
      navigate("/");
    }
  };
  const handleSubmit = async (event) => {
    const a = await submitForm(event);
    if (a){
      navigate(`/ClassDetail/${a.classid}`)
    }
  };

  return (
    <div className={"d-flex justify-content-center "}>
      <Dialog
        open={!!params["accessToken"] ? open : openMode}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Enter your access token"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Paper className={"d-flex flex-conlumn justify-content-center "}>
              <form
                className={"justify-content-center pt-5 pl-3 pr-3 pb-5 "}
                id={"createForm"}
                onSubmit={handleSubmit}
              >
                <div className={"d-flex justify-content-center mb-2 p-5 "}>
                  <TextField
                    label="Token Access"
                    name={"tokenAccess"}
                    value={tokenAccess}
                    onInput={(e) => setTokenAccess(e.target.value)}
                  />
                </div>
              </form>
            </Paper>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Exit</Button>
          <Button onClick={handleSubmit} autoFocus>
            Join Class
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
