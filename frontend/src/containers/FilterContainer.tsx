import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from 'lodash';

import {changeCurrency, changeTransferCount} from '../actions/filterActions';
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

    handleCurrency = ( currency: string ) => {
        const { changeCurrency } = this.props;
        changeCurrency(currency);
    }

    handleTransferCount = ( transferCountArr: string[] ) => {
        const { changeTransferCount } = this.props;
        changeTransferCount(transferCountArr);
    }

    render(){
        const { filters: { currency, transferCountArr } } = this.props;

        return(
            <div className="filter-container">
                <CurrencyComponent handleCurrency={this.handleCurrency} currency={currency} />
                <TransferCountComponent handleTransferCount={this.handleTransferCount} transferCountArr={transferCountArr} />
            </div>
        );
    }
};

export default connect(
    (state: any) => ({
        filters: state.filters
    }),
    (dispatch) => ({
        changeCurrency: (currency: string) => dispatch(changeCurrency(currency)),
        changeTransferCount: ( transferCountArr: string[] ) => dispatch(changeTransferCount(transferCountArr))
    })
)(FilterContainer);