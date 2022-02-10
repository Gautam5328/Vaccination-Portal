import { combineReducers } from "redux";
import { userVaccineReducer } from "./userVaccineReducer";

const commonReducer=combineReducers({
    finalreducers : userVaccineReducer
})

export default commonReducer