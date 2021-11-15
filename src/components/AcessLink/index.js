import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {  useState } from 'react';
import Paper from '@material-ui/core/Paper'

import { useNavigate } from "react-router-dom";
function submitForm(event = null) {  
    if(event){
        event.preventDefault();
    }
    var form = document.querySelector("#createForm");
    var data = {
        tokenAccess : form.querySelector('input[name="tokenAccess"]').value,
    }
    fetch("https://btcn3-api-18127141.herokuapp.com/classes/addClass",
    {
        headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(function(res){ 
        alert("Access successful !!!");
    })
    .catch(function(res){ alert("Access failure"); })
}
// export default CreateNew



export default function AccessLink({openMode, onClose}) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const navigate = useNavigate();
    const [tokenAccess, setTokenAccess] = useState(params["classname"]);
    const [open, setOpen] = useState(!!params["classname"]);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
        try{
            onClose()
        }catch(err){
            navigate('/')
        }
       
      };
    const handleSubmit = (event)=> {
    submitForm(event)
    }
    
  return (
     <div className={"d-flex justify-content-center "} >
     <Dialog
       open={!!params["classname"]?open:openMode}
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
         <form className={"justify-content-center pt-2 pl-3 pr-3 pb-2 "}  
                    id={"createForm"}
                    onSubmit={handleSubmit} >
                        <div className ={"d-flex justify-content-center mb-2 "}>
                       
                        <TextField
                            label = "Token Access"
                            name = {"tokenAccess"}
                            value={tokenAccess}
                            onInput={ e=>setTokenAccess(e.target.value)}
                        />
                        </div>
        </form>
           </Paper>
         </DialogContentText>
       </DialogContent>
       <DialogActions>
         <Button  onClick={handleClose}>Exit</Button>
         <Button onClick={handleSubmit} autoFocus>
         Join Class
         </Button>
       </DialogActions>
     </Dialog>
   </div>
  );
}