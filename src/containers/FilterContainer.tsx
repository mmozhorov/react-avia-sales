import React, { Component } from 'react';
import { connect } from "react-redux";
import { changeCurrency, changeTransferCount, clearFilter} from "../actions/filterActions";
import { CurrencyComponent } from '../components/Filter/CurrencyComponent';
import { TransferCountComponent } from '../components/Filter/TransferCountComponent';

import { FilterParamsInterface } from '../types/filterReducerTypes';
import "./FilterContainer.css";

interface FilterFunctionInterface {
    filterState: FilterParamsInterface,
    changeCurrency: ( value: string ) => void,
    changeTransferCount: ( value: number ) => void,
    clearFilter: () => void
};

const FilterContainer = ( { filterState, changeCurrency , changeTransferCount, clearFilter  }: FilterFunctionInterface) => {
    return(
        <div className="filter-container">
            <CurrencyComponent changeCurrency={filterActions.changeCurrency}/>
            <TransferCountComponent changeTransferCount={filterActions.changeTransferCount} />
        </div>
    );
};

export default connect(
    (state: any) => ({ filterState : state.FilterReducer }) ,
    { changeCurrency , changeTransferCount, clearFilter })(FilterContainer);