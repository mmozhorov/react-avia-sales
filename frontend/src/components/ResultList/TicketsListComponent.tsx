import React from 'react';

import { TicketComponent } from './TicketComponent';
import { tickets } from '../../tickets.json';

export const TicketsListComponent = () => {
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