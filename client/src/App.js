import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/SignupPage/SignupPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import NavbarComponent from "./components/NavBarComponent/NavbarComponent";

function App() {
  return (
    <>
   
      <Router>
      <NavbarComponent/>
      <Switch>
          <Route path="/login" >
            <LoginPage/>
          </Route>
          <Route path="/signup">
            <SignupPage/>
            </Route> 
          <Route path="/" >
            <HomePage/>
          </Route>  
      </Switch>
    </Router>
    </>
  );
}

export default App;
