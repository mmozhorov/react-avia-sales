import React, { Component } from 'react';
import { TicketComponent } from './TicketComponent';

export const TicketsListComponent = ( tickets: any) => {
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