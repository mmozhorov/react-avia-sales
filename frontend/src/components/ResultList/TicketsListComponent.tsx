import React from 'react';

import { changeOffset } from '../../actions/filterActions';

import { useFilters } from "../../hooks/useFilters";
import { useTickets, useTicketsCount } from '../../hooks/useTickets';

import { TicketComponent } from './TicketComponent';
import { Pagination } from "../Pagination";

export const TicketsListComponent = () => {
    const { tickets } = useTickets();
    const { ticketsCount, dispatch: changeTicketsCount } = useTicketsCount();
    const { filters: { limit, offset }, dispatch: changeFilters } = useFilters();

    const handlePagination = ( page: number) => {
        changeFilters(changeOffset(page));
    }

    return(
        <div>
            {tickets.map( (item: any , i: number) => <TicketComponent key={ i } ticket={ item } /> )}
            <Pagination
                handlePagination={handlePagination}
                ticketsCount={ticketsCount}
                limit={limit}
                offset={offset}
            />
        </div>
    );
}