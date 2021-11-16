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
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from "react-router-dom";
async function submitForm(event = null) {
    let Data =null;
  if (event) {
    event.preventDefault();
  }
  var form = document.querySelector("#createForm");
  var isTeacherInvite = form.querySelector('input[name="teacherInvite"]').checked;
  console.log(isTeacherInvite)
  var classid = form.querySelector('input[name="classID"]').value;
  var url = "http://localhost:5000/mail/CreateInviteLink?classid=" + classid +"&isTeacherInvite=" + isTeacherInvite;
  console.log(url)
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

export default function GetLink({ openMode, onClose }) {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login");
    }
  }, [navigate]);
  const [checked, setChecked] = React.useState(true);
  const handleChangeChecked = (event) => {
    setChecked(event.target.checked);
  };
  const [classID, setClassID] = useState();
  const [tokenAccess, setTokenAccess] = useState();
  const [linkAccess, setLinkAccess] = useState();
  const [open, setOpen] = useState(!!params["accessToken"]);
  const handleClose = () => {
    setOpen(false);
    try {
      onClose();
    } catch (err) {
      navigate("/");
    }
  };
  const handleSubmit = async (event) => {
    var accessResuil = await submitForm(event)
    if(accessResuil.messange!=null){
        alert(accessResuil.messange)
    }else{
        setLinkAccess(accessResuil.link);
        setTokenAccess(accessResuil.token)
    }
   
  };

  return (
    <div className={""}>
      <Dialog
        open={!!params["accessToken"] ? open : openMode}
        onClose={handleClose}
      >
        <DialogTitle >
          {"Enter your access token"}
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
                    value={classID}
                    onInput={(e) => setClassID(e.target.value)}
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
                  <TextField
                    label="Token Access"
                    name={"tokenAccess"}
                    value={tokenAccess}
                    fullWidth
                    onInput={(e) => setTokenAccess(e.target.value)}
                  />
               
                
                  <TextField
                    label="Link Access"
                    name={"linkAccess"}
                    fullWidth
                    value={linkAccess}
                    onInput={(e) => setLinkAccess(e.target.value)}
                  />
                 
                 
                 
                
            </Paper>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Exit</Button>
          <Button onClick={handleSubmit} autoFocus>
            Get Invite Link
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
