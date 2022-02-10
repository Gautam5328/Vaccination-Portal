import React from "react";
import { Route,Redirect } from "react-router";
import Auth from "./Auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
    {...rest}
    render={props =>
    Auth.getAuth() ? (
    <Component {...props} />
    ) : (
    <Redirect
    to={{
    pathname: "/login"
    }}
    />
    )
    }
    />
    );


    export default PrivateRoute