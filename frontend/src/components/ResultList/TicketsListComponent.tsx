import React, {useEffect} from 'react';

import { TicketComponent } from './TicketComponent';
import { TicketApi } from '../../api/ticket-api';
import { useFilters } from '../../hooks/useFilters';
import { useTickets } from '../../hooks/useTickets';

export const TicketsListComponent = () => {
    const { dispatch: changeTickets, tickets } = useTickets();
    const { filters } = useFilters();

    useEffect(() => {
        TicketApi.getTickets(filters).then( changeTickets );
    }, [filters, tickets]);

    console.log(tickets);
    return(
        <div>
            {tickets.map( (item: any , i: number) => {
                return (
                    <TicketComponent key={i} ticket={item}/>
                )
            })}
        </div>
    );
}