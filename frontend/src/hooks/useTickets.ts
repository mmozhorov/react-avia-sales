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