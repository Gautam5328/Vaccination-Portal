import React from "react";
import { useSelector } from "react-redux";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

function UserDashboard() {
  const loggedUser = useSelector((state) => state.finalreducers.loggedUserData);

  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "30vh" }}
      >
        <Typography style={{fontSize:'30px'}}>My Information</Typography>
        <Button onClick={()=>setOpen(true)} variant="outlined" style={{fontSize:'20px',marginTop:'20px'}}>Click Me</Button>
      </Grid>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">My Information</DialogTitle>
        <Typography
          style={{
            marginLeft: "30px",
            marginRight: "30px",
            marginTop: "10px",
            marginBottom: "20px",
            borderLeft: "solid 6px",
          }}
        >
          . FirstName :- {loggedUser.firstName}
        </Typography>
        <Typography
          style={{
            marginLeft: "30px",
            marginRight: "30px",
            marginTop: "10px",
            marginBottom: "20px",
            borderLeft: "solid 6px",
          }}
        >
          . LastName :- {loggedUser.lastName}
        </Typography>
        <Typography
          style={{
            marginLeft: "30px",
            marginRight: "30px",
            marginTop: "10px",
            marginBottom: "20px",
            borderLeft: "solid 6px",
          }}
        >
          . Email :- {loggedUser.email}
        </Typography>
        <Typography
          style={{
            marginLeft: "30px",
            marginRight: "30px",
            marginTop: "10px",
            marginBottom: "20px",
            borderLeft: "solid 6px",
          }}
        >
          . Password :- {loggedUser.password}
        </Typography>
      </Dialog>
    </div>
  );
}

export default UserDashboard;
