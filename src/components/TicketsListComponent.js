import React, { Component } from 'react';
import TicketComponent from './TicketComponent';

export default class TicketsListComponent extends Component{

    render() {
        return(
            <div>
                {this.props.tickets.map( (item , i) => {
                    return (
                        <TicketComponent key={i} ticket={item}/>
                    )
                })}
            </div>
        );
    }
}