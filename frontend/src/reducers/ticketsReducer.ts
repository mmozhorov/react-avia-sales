import { TicketsInterface } from "../types/ticketsTypes";
import * as types from '../constants/ticketTypes';
import {strictEqual} from "assert";

const initialState: TicketsInterface = {
    isLoading: false,
    error: null,
    tickets: []
};

export default function ticketsReducer( state = initialState, action: any ) {
    switch (action.type) {
        case types.TICKETS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case types.TICKETS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                tickets: action.tickets
            }
        case types.TICKETS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}