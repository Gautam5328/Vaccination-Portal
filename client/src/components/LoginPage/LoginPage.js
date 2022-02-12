import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link, useHistory } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Auth from "../Authentication/Auth";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loggedUser } from "../../redux/actions/actions";

const theme = createTheme();

export default function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secretKey,setSecretKey]=useState("");
  const dispatch=useDispatch();

  const [apiData, setApiData] = React.useState([]);
  const handleSubmit = () => {
    let flag=false;
    apiData.map((data) => {
      if ((data.email == email) && (data.password == password) && (data._id===secretKey)) {
        toast.configure();
        toast.success("Login Success", { toastId: "success4" });
        Auth.authenticate();
        dispatch(loggedUser(data));
        flag=true;
        history.push("/vaccineform");
      }
    })
    if(flag===false){
      toast.configure();
      toast.warning("Invalid Credentials", { toastId: "success1" });
      history.push("/login");
    }
     
  };


  React.useEffect(() => {
    axios.get("http://localhost:5000/api/userData").then((response) => {
      setApiData(response.data);
     
    });
  }, []);

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
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="secretKey"
              label="Secret Key"
              type="text"
              id="secretKey"
              onChange={(e) => setSecretKey(e.target.value)}
              autoComplete="secretKey"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />{" "}
            <Grid item xs={12} container>
              <Button
                color="primary"
                size="large"
                style={{
                  marginBottom: "30px",
                  backgroundColor: "#21b6ae",
                  borderRadius: 35,
                  padding: "8px 20px",
                  fontSize: "13px",
                }}
                onClick={handleSubmit}
              >
                <span style={{ color: "black" }}>SignIn</span>
              </Button>
            </Grid>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                Don't have an account?
                <Link to="/signup" variant="body2">
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
