import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from 'lodash';

import {TicketsInterface} from "../types/ticketsTypes";

import {changeCurrency, changeTransferCount} from '../actions/filterActions';
import {getTicketsListFailed, getTicketsListRequest, getTicketsListSuccess} from "../actions/ticketsActions";

import { TicketApi } from '../api/ticket-api';

import { CurrencyComponent } from '../components/Filter/CurrencyComponent';
import { TransferCountComponent } from '../components/Filter/TransferCountComponent';

import "./FilterContainer.css";

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
            const {ticketsCount, tickets} = await TicketApi.getTickets(filters);
            getTicketsListSuccess(ticketsCount, tickets);
        }
        catch (error) {
            getTicketsListFailed(error);
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
    ({ filters }: any) => ({
        filters
    }),
    (dispatch) => ({
        changeCurrency: (currency: string) => dispatch(changeCurrency(currency)),
        changeTransferCount: ( transferCountArr: string[] ) => dispatch(changeTransferCount(transferCountArr)),
        getTicketsListRequest: () => dispatch(getTicketsListRequest()),
        getTicketsListSuccess: ( ticketsCount: number, tickets: TicketsInterface ) => dispatch(getTicketsListSuccess(ticketsCount, tickets)),
        getTicketsListFailed: ( error: any ) => dispatch(getTicketsListFailed(error))
    })
)(FilterContainer);