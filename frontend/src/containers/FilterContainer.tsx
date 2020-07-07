import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from 'lodash';

import {changeCurrency, changeTransferCount} from '../actions/filterActions';
import {getTicketsListFailed, getTicketsListRequest, getTicketsListSuccess} from "../actions/ticketsActions";

import { TicketApi } from '../api/ticket-api';

import { CurrencyComponent } from '../components/Filter/CurrencyComponent';
import { TransferCountComponent } from '../components/Filter/TransferCountComponent';

import "./FilterContainer.css";
import {TicketsInterface} from "../types/ticketsTypes";

class FilterContainer extends Component<any, any>{

    handleCurrency = ( currency: string ) => {
        const { changeCurrency } = this.props;
        changeCurrency(currency);
    }

    handleTransferCount = ( transferCountArr: string[] ) => {
        const { changeTransferCount } = this.props;
        changeTransferCount(transferCountArr);
    }

    updateTicketsList = async ( filters ) => {
        const {
            getTicketsListFailed,
            getTicketsListRequest,
            getTicketsListSuccess
        } = this.props;

        try{
            getTicketsListRequest();
            const tickets = await TicketApi.getTickets(filters);
            getTicketsListSuccess(tickets);
        }
        catch (e) {
            getTicketsListFailed(e);
        }
    }

    componentDidMount(){
        const { filters } = this.props;
        this.updateTicketsList(filters);
    }

    componentDidUpdate(prevProps){
        const { filters: prevFilters } = prevProps;
        const { filters: currentFilters } = this.props;

        if(!_.isEqual(prevFilters, currentFilters))
            this.updateTicketsList(currentFilters);
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
        changeTransferCount: ( transferCountArr: string[] ) => dispatch(changeTransferCount(transferCountArr)),
        getTicketsListRequest: () => dispatch(getTicketsListRequest()),
        getTicketsListSuccess: ( tickets: TicketsInterface ) => dispatch(getTicketsListSuccess(tickets)),
        getTicketsListFailed: ( error: any ) => dispatch(getTicketsListFailed(error))
    })
)(FilterContainer);