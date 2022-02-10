import { createStore } from "redux"
import commonReducer from "./reducers/commonReducer";

const store=createStore(commonReducer,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;