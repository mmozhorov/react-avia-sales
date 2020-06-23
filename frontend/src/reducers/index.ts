import { combineReducers } from "redux";
import filters from './filterReducer';
import tickets from './ticketReducer';

export default combineReducers({
    filters,
    tickets
});