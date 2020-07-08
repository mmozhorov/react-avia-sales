import React from 'react';

import { changeOffset, changeLimit, changeOrderFilter } from '../../actions/filterActions';

import { useFilters } from "../../hooks/useFilters";
import { useTickets, useTicketsCount } from '../../hooks/useTickets';

import { TicketComponent } from './TicketComponent';
import { Pagination } from "../Pagination";
import { FilterSort } from "../Pagination/FilterSort";

export const TicketsListComponent = () => {
    const { tickets } = useTickets();
    const { ticketsCount } = useTicketsCount();
    const { filters: { limit, offset }, dispatch: changeFilters } = useFilters();

    const handlePagination = ( page: number) => {
        changeFilters(changeOffset(page));
    }

    return(
        <div>
            <FilterSort
                limit={limit}
                handleLimit={(value) => changeFilters(changeLimit(value))}
                handleSortFilter={(orderFilter) => changeFilters(changeOrderFilter(orderFilter))}
            />
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