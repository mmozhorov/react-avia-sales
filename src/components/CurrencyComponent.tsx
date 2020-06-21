import React, { useState } from 'react';
import './CurrencyComponent.css';

const currencyTypes = [ "RUB", "USD" , "EUR" ];

export const CurrencyComponent = ( changeCurrency: ( item: string ) => void ) => {
    return(
        <div>
            <h5>Currency</h5>
            <ul className="form-tabs">
                {currencyTypes.map( (item: string, i: number ) => {
                    return (
                        <li className="form-tabs__item active" key={i}>
                            <span className="form-tabs__link" onClick={ () => changeCurrency(item) }>{item}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}