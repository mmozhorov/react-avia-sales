import React, {useEffect, useState} from 'react';

import { TicketComponent } from './TicketComponent';
import { TicketApi } from "../../api/ticket-api";
import {useFilters} from "../../hooks/useFilters";

export const TicketsListComponent = () => {
    const [tickets, useTickets] = useState([]);
    const { filters } = useFilters();

    useEffect(() => {
        TicketApi.getTickets(filters).then( useTickets );
    }, [filters]);

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