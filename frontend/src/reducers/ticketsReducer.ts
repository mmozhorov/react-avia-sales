import { TicketsInterface } from "../types/ticketsTypes";
import * as types from '../constants/ticketTypes';

const initialState: TicketsInterface = {
    isLoading: false,
    error: null,
    tickets: [],
    ticketsCount: 0
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
                tickets: action.tickets,
                ticketsCount: action.ticketsCount
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