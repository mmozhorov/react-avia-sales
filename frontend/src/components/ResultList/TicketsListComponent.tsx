import React, {useEffect} from 'react';

import { TicketComponent } from './TicketComponent';
import { TicketApi } from '../../api/ticket-api';
import { useFilters } from '../../hooks/useFilters';
import { useTickets } from '../../hooks/useTickets';

export const TicketsListComponent = () => {
    const { tickets } = useTickets();
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