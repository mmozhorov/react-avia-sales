import { useDispatch, useSelector } from 'react-redux';
import { TicketInterface } from "../types/ticketsTypes";

export const useTickets = () => {
    const dispatch = useDispatch();
    const tickets = useSelector( (state: any): TicketInterface[] => state.tickets.tickets );

    return {
        dispatch,
        tickets
    };
}

export const useTicketsCount = () => {
    const dispatch = useDispatch();
    const ticketsCount = useSelector( (state: any): TicketInterface[] => state.tickets.ticketsCount );

    return {
        dispatch,
        ticketsCount
    };
}