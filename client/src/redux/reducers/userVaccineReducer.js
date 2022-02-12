import { ActionTypes } from "../actions/actionType";

const initialState = {
    userVaccineData: [],
    userSignupData: [],
    loggedUserData:[],
}

export const userVaccineReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ActionTypes.SET_USER_VACCINE_INFO:
            return {
                ...state,
                userVaccineData: payload
            }
        case ActionTypes.SET_USER_SIGNUP_INFO:
            return {
                ...state,
                userSignupData: payload
            }

        case ActionTypes.SET_LOGGED_USER:
            return{
                state,
                loggedUserData:payload
            }    

        default:
            return state;

    }
}