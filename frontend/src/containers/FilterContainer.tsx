import React from 'react';
import { CurrencyComponent } from '../components/Filter/CurrencyComponent';
import { TransferCountComponent } from '../components/Filter/TransferCountComponent';

import "./FilterContainer.css";

export const FilterContainer = ( ) => {
    return(
        <div className="filter-container">
            <CurrencyComponent/>
            <TransferCountComponent />
        </div>
    );
};