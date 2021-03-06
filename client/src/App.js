import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/SignupPage/SignupPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NavbarComponent from "./components/NavBarComponent/NavbarComponent";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import VaccineFormDetails from "./components/VaccineFormDetails/VaccineFormDetails";
import CovidDisplayData from "./components/CovidDisplayData";
import UserDashboard from "./components/UserDashboard/UserDashboard";

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Switch>
          <PrivateRoute path="/vaccineform" component={VaccineFormDetails} />
          <PrivateRoute path="/userdashboard" component={UserDashboard}/>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/home">
            <CovidDisplayData />
          </Route>          
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
