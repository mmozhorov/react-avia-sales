import React, { Component } from 'react';
import TicketsListComponent from '../components/TicketsListComponent';
import {connect} from "react-redux";
import './TicketContainer.css';

class TicketsContainer extends Component{
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