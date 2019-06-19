import React, { Component } from 'react';
import {connect} from "react-redux";
import axios from 'axios';
import './TicketContainer.css';

class TicketsContainer extends Component{

    componentWillMount() {
        axios.get('https://github.com/Major98113/test-tasks/blob/master/aviasales/tickets.json')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render() {
        return (
            <div className="ticket-container">

            </div>
        );
    }
}

const mapStateToProps = state => ({
    isSetParameters : state.FilterReducer.isSetParameters,
    customParameters : state.FilterReducer.customParameters
});

export default connect( mapStateToProps )(TicketsContainer);