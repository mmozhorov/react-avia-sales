import { combineReducers } from "redux";
import filters from './filterReducer';
import tickets from './ticketsReducer';

export default combineReducers({
    filters,
    tickets
});