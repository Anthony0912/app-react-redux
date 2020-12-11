import { combineReducers } from "redux";

//reducers
import alertReducers from "./alert.Reducers";
export default combineReducers({ alerts: alertReducers });
