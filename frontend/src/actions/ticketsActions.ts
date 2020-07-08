import * as types from '../constants/ticketTypes';
import {TicketsInterface} from "../types/ticketsTypes";

export const getTicketsListRequest = ( ) => ({
    type: types.TICKETS_REQUEST,
    isLoading: true
});

export const getTicketsListSuccess = ( ticketsCount: number, tickets: TicketsInterface ) => ({
    type: types.TICKETS_SUCCESS,
    ticketsCount,
    tickets,
    isLoading: false
});

export const getTicketsListFailed = ( error: any ) => ({
    type: types.TICKETS_FAILED,
    error,
    isLoading: false
});