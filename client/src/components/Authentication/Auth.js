import React from "react";
import { Redirect ,Route} from "react-router";

const Auth = {
    isAuthenticated: false,
    
    authenticate() {
    this.isAuthenticated = true;
    },
    
    signout() {
    this.isAuthenticated = false;
    },

    
    getAuth() {
    return this.isAuthenticated;
    }
};

export default Auth;