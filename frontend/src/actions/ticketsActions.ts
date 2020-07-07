import * as types from '../constants/ticketTypes';
import {TicketsInterface} from "../types/ticketsTypes";

export const getTicketsListRequest = ( ) => ({
    type: types.TICKETS_REQUEST,
    isLoading: true
});

export const getTicketsListSuccess = ( tickets: TicketsInterface ) => ({
    type: types.TICKETS_SUCCESS,
    tickets,
    isLoading: false
});

export const getTicketsListFailed = ( error: any ) => ({
    type: types.TICKETS_FAILED,
    error,
    isLoading: false
});