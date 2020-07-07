import React from 'react';

import { TicketComponent } from './TicketComponent';
import { useTickets } from '../../hooks/useTickets';

export const TicketsListComponent = () => {
    const { tickets } = useTickets();
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