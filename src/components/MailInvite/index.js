import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {  useState ,useEffect} from 'react';
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import LinearProgress from "@mui/material/LinearProgress";

import {useParams,useNavigate } from "react-router-dom";
async function submitForm(event = null) {
    let Data =null;
  if (event) {
    event.preventDefault();
  }
  var form = document.querySelector("#createForm");
  var isTeacherInvite = form.querySelector('input[name="teacherInvite"]').checked;

  var classid = form.querySelector('input[name="classID"]').value;
  var mail = form.querySelector('input[name="email"]').value;

  // var url = "http://localhost:5000/mail/sendMail?classid=" + classid + "&mails=" + mail + "&isTeacherInvite=" + isTeacherInvite;
  var url = `${process.env.REACT_APP_API_URL}/mail/sendMail?classid=${classid}&mails=${mail}&isTeacherInvite=${isTeacherInvite}`
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
        Data = responseData
        

    })
    .catch(function (res) {
        console.log(res.err)
    });
    return Data
}
// export default CreateNew

export default function MailInvite({ openMode, onClose }) {
  const [loading,setLoading] = useState(false)

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const localParams = useParams();
  
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login");
    }
  }, [navigate]);
  const [classID, setClassID] = useState(localParams.id);
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(!!params["accessToken"]);
  const handleClose = () => {
    setOpen(false);
    try {
      onClose();
    } catch (err) {
      navigate("/");
    }
  };
  const [checked, setChecked] = React.useState(false);
  const handleChangeChecked = (event) => {
    setChecked(event.target.checked);
  };
  const handleSubmit = async (event) => {
    if (email.length===0){
      alert("EMAIL CAN NOT BE EMPTY")
      return 
    }
    setLoading(true)
    var accessResuil = await submitForm(event)
    if(accessResuil.message!=null){
        alert(accessResuil.message)
    }

    setLoading(false)

  };

  return (
    <div className={""}>
      <Dialog
        open={!!params["accessToken"] ? open : openMode}
        onClose={handleClose}
      >
        {loading && <LinearProgress/>}
        <DialogTitle >
          {"Enter  mail"}
        </DialogTitle>
        <DialogContent>
            <Paper className={""}>
              <form
                className={""}
                id={"createForm"}
                onSubmit={handleSubmit}
              >
                
                  <TextField
                    label="classID"
                    name={"classID"}
                    fullWidth
                    inputProps={
                      { readOnly: true, }
                    }
                    value={classID}
                    onInput={(e) => setClassID(e.target.value)}
                  />

                <TextField
                    label="Email"
                    name={"email"}
                    value={email}
                    fullWidth
                    onInput={(e) => setEmail(e.target.value)}
                /> 
                 <FormControlLabel
                  label="Teacher invite"
                   control = {
                    <Checkbox
                    name={"teacherInvite"}
                    checked={checked}
                    onChange={handleChangeChecked}
                  /> 
                  }/>   
            </form>
            </Paper>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} disabled={loading}>Exit</Button>
          <Button onClick={handleSubmit} disabled={loading} autoFocus>
            Send invite mail
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
