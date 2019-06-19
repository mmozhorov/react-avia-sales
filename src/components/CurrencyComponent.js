import React, { Component } from 'react';
import './CurrencyComponent.css';

const currencyTypes = [ "RUB", "USD" , "EUR" ];

export default class CurrencyComponent extends Component{
    render() {
        return(
            <div>
                <h5>ВАЛЮТА</h5>
                <ul className="form-tabs">
                    {currencyTypes.map( (item,i ) => {
                        return (
                            <li className="form-tabs__item active" key={i}>
                                <a className="form-tabs__link" onClick={ () => this.props.changeCurrency(item) }>{item}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}