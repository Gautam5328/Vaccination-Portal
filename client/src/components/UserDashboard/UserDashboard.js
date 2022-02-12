import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import axios from "axios";

function UserDashboard() {
  const loggedUser = useSelector((state) => state.finalreducers.loggedUserData);

  const [open, setOpen] = React.useState(true);
  const [openVaccineStatus, setOpenVaccineStatus] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [userVaccineInformation, setUserVaccineInformation] = React.useState(
    []
  );

  const handleClose = () => {
    setOpen(false);
    setOpenVaccineStatus(false);
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/vaccineInfo").then((res) => {
      res.data.map((user) => {
        if (user.secretKey === loggedUser._id) setUserVaccineInformation(user);
      });
    });
  }, [openVaccineStatus]);

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "40vh" }}
      >
        <Typography style={{ fontSize: "30px" ,backgroundColor:'yellow'}}>
          Next Date of Vaccination : {userVaccineInformation.nextVaccineDate}
          <br></br>
          {
            userVaccineInformation.vaccineStatus!="twoDose" &&   
            <b>Days left for Second Dose : 60</b>
            } 
        </Typography>
      </Grid>

      
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "30vh" }}
      >
        <Typography style={{ fontSize: "30px" }}>My Information</Typography>
        <Button
          onClick={() => setOpen(true)}
          variant="outlined"
          style={{ fontSize: "20px", marginTop: "20px" }}
        >
          Click Me
        </Button>
      </Grid>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "50vh" }}
      >
        <Typography style={{ fontSize: "30px" }}>
          Vaccination Information
        </Typography>
        <Button
          onClick={() => setOpenVaccineStatus(true)}
          variant="outlined"
          style={{ fontSize: "20px", marginTop: "20px" }}
        >
          Click Me
        </Button>
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
            backgroundColor: "yellow",
          }}
        >
          . Secret Key :- {loggedUser._id}
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

      <Dialog
        fullScreen={fullScreen}
        open={openVaccineStatus}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Vaccination Information
        </DialogTitle>
        <Typography
          style={{
            marginLeft: "30px",
            marginRight: "30px",
            marginTop: "10px",
            marginBottom: "20px",
            borderLeft: "solid 6px",
            backgroundColor: "yellow",
          }}
        >
          . Secret Key :- {userVaccineInformation.secretKey}
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
          . Number of Doses Taken :- {userVaccineInformation.vaccineStatus}
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
          . Next Date of Vaccination :- {userVaccineInformation.nextVaccineDate}
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
          . Beneficiary Name :- {userVaccineInformation.beneficiaryName}
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
          . Aadhar Number :- {userVaccineInformation.aadharNumber}
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
          . Age :- {userVaccineInformation.age}
        </Typography>
      </Dialog>
    </div>
  );
}

export default UserDashboard;
