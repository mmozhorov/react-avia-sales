import React from 'react';

import { changeCurrency } from "../../actions/filterActions";
import { useFilters } from "../../hooks/useFilters";

import './CurrencyComponent.css';

const currencyTypes = [ "RUB", "USD" , "EUR" ];

export const CurrencyComponent = () => {
    const { dispatch } = useFilters();

    return(
        <div className="currency-filter">
            <h5>Currency</h5>
            <ul className="form-tabs">
                {currencyTypes.map( (item: string, i: number ) => {
                    return (
                        <li className="form-tabs__item active" key={i}>
                            <span className="form-tabs__item__link" onClick={ () => dispatch(changeCurrency(item)) }>{item}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}