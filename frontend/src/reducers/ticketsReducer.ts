import * as types from '../actions/ticketsActions';
import { TicketsInterface } from "../types/ticketsTypes";

const initialState: TicketsInterface = {
    isLoading: false,
    tickets: []
};

export default function ticketsReducer( state = initialState, action: any ) {
    switch (action.type) {
        case types.TICKETS_REQUEST:
            return {
                isLoading: true
            }
        case types.TICKETS_SUCCESS:
            return {
                isLoading: false,
                tickets: action.tickets
            }
        case types.TICKETS_FAILED:
            return {
                isLoading: false,
                tickets: []
            }
        default:
            return state;
    }
}