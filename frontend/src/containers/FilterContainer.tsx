import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from 'lodash';

import { changeCurrency } from '../actions/filterActions';
import { TicketApi } from '../api/ticket-api';
import { CurrencyComponent } from '../components/Filter/CurrencyComponent';
import { TransferCountComponent } from '../components/Filter/TransferCountComponent';

import "./FilterContainer.css";

class FilterContainer extends Component<any, any>{
    async componentDidMount(){
        const { filters } = this.props;
        await TicketApi.getTickets(filters);
    }

    async componentDidUpdate(prevProps){
        const { filters: prevFilters } = prevProps;
        const { filters: currentFilters } = this.props;

        if(!_.isEqual(prevFilters, currentFilters))
            await TicketApi.getTickets(currentFilters);
    }

    handleCurrency = async ( currency: string ) => {
        const { changeCurrency } = this.props;
        changeCurrency(currency);
    }

    render(){
        const { filters: { currency } } = this.props;

        return(
            <div className="filter-container">
                <CurrencyComponent handleCurrency={this.handleCurrency} currency={currency} />
                <TransferCountComponent />
            </div>
        );
    }
};

export default connect(
    (state: any) => ({
        filters: state.filters
    }),
    (dispatch) => ({
        changeCurrency: (currency: string) => dispatch(changeCurrency(currency))
    })
)(FilterContainer);