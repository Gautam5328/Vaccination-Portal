import { ActionTypes } from "../actions/actionType";

const initialState={
    userVaccineData : []
}

export const userVaccineReducer=(state=initialState,{type,payload})=>{
    switch(type){
        
        case ActionTypes.SET_USER_VACCINE_INFO :
            return{
                ...state,
                userVaccineData : payload
            }
      
        default:
            return state;

    }   
}