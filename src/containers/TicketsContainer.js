import React, { Component } from 'react';
import TicketsListComponent from '../components/TicketsListComponent';
import {connect} from "react-redux";
import tickets from '../tickets';
import './TicketContainer.css';

class TicketsContainer extends Component{

    constructor(props){
        super(props);
        this.allTickets = tickets.tickets.map( (item) => item );
        this.allTickets.sort(this.sortByPrice);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isSetParameters){
                if (nextProps.currency.length){

                }
        }
    }

    sortByPrice(ticketA, ticketB){
        return ticketA.price - ticketB.price;
    }

    render() {
        return (
            <div>
                <TicketsListComponent tickets={this.allTickets} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isSetParameters : state.FilterReducer.isSetParameters,
    customParameters : state.FilterReducer.customParameters
});

export default connect( mapStateToProps )(TicketsContainer);