import { ActionTypes } from "./actionType";

export const setUserVaccineInfo=(info)=>{
    return{
        type : ActionTypes.SET_USER_VACCINE_INFO,
        payload : info
    }
}