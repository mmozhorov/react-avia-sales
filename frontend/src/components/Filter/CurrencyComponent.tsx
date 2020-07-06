import React from 'react';
import './CurrencyComponent.css';

const currencyTypes = [ "RUB", "USD" , "EUR" ];

export const CurrencyComponent = ({ handleCurrency, currency }) => (
    <div className="currency-filter">
        <h5>Currency</h5>
        <ul className="form-tabs">
            {currencyTypes.map((item: string, i: number) => {
                return (
                    <li className="form-tabs__item active" key={i}>
                        <button className={`btn ${currency === item ? 'btn-primary' : 'btn-light'}`}
                                onClick={() => handleCurrency(item)}>
                            {item}
                        </button>
                    </li>
                )
            })}
        </ul>
    </div>
);