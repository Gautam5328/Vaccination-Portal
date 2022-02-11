import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import PhotoCamera from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";
import {useDispatch} from 'react-redux';
import { setUserVaccineInfo } from "../../redux/actions/actions";

const theme = createTheme();

export default function VaccineFormDetails() {
  const [gender, setGender] = React.useState("");
  const dispatch=useDispatch();
  const [vaccineStatus, setVaccineStatus] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const userVaccineData={
        name:data.get("beneficiary_name"),
        password: data.get("password"),
        aadharNumber:data.get("security_number"),
        age:data.get("age"),
        gender:{gender},
        beneficiary_id:data.get("beneficiary_id"),
        vaccineStatus:{vaccineStatus},
        
    }
    dispatch(setUserVaccineInfo(userVaccineData));

    console.log(userVaccineData)
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Enter Vaccine Details
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="beneficiary_name"
                  label="Beneficiary Name"
                  name="beneficiary_name"
                  autoComplete="beneficiary_name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="security_number"
                  label="Aadhar Card Number"
                  name="security_number"
                  autoComplete="security_number"
                />
              </Grid>

              <Grid item xs={12} sx={{ display: "flex" }}>
                <TextField
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  autoComplete="age"
                  sx={{ marginRight: "20px" }}
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="gender"
                    value={gender}
                    label="Gender"
                  >
                    <MenuItem value={"male"} onClick={() => setGender("male")}>
                      Male
                    </MenuItem>
                    <MenuItem
                      value={"female"}
                      onClick={() => setGender("female")}
                    >
                      Female
                    </MenuItem>
                    <MenuItem
                      value={"other"}
                      onClick={() => setGender("other")}
                    >
                      Other
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="beneficiary_id"
                  label="Beneficiary Reference ID"
                  name="beneficiary_id"
                  autoComplete="beneficiary_id"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Vaccination Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={vaccineStatus}
                    label="Vaccination Status"
                    autoWidth
                  >
                    <MenuItem
                      value={"oneDose"}
                      onClick={() => setVaccineStatus("oneDose")}
                    >
                      Partially Vaccinated (1 Dose)
                    </MenuItem>
                    <MenuItem
                      value={"twoDose"}
                      onClick={() => setVaccineStatus("twoDose")}
                    >
                      Fully Vaccinated (2 Doses)
                    </MenuItem>
                    <MenuItem
                      value={"noDose"}
                      onClick={() => setVaccineStatus("noDose")}
                    >
                      Not Vaccinated
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12} sx={{ display: "flex" }}>
                <Typography sx={{ marginRight: "60px" }}>
                  Upload your Certificate
                </Typography>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  id="contained-button-file"
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Upload
                  </Button>
                </label>
                <h3> OR </h3>
                <input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  style={{ display: "none" }}
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I agree to the Terms of Service and Privacy Policy"
                />
              </Grid>
              <Grid item xs={12} container>
                <Button
                  type="submit"
                  color="primary"
                  size="large"
                  style={{
                    marginBottom: "30px",
                    backgroundColor: "#21b6ae",
                    borderRadius: 35,
                    padding: "8px 20px",
                    fontSize: "13px",
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
