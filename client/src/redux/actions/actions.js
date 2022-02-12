import { ActionTypes } from "./actionType";

export const setUserVaccineInfo=(info)=>{
    return{
        type : ActionTypes.SET_USER_VACCINE_INFO,
        payload : info
    }
}

export const userSignupInfo=(info)=>{
    return{
        type:ActionTypes.SET_USER_SIGNUP_INFO,
        payload:info
    }
}

export const loggedUser=(info)=>{
    return{
        type:ActionTypes.SET_LOGGED_USER,
        payload:info
    }
}