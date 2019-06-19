import React, { Component } from 'react';

const CountOfTransfer = [ "Все", "Без пересадок", "1 пересадка", "2 пересадки", "3 пересадки" ];


export default class TransferCountComponent extends Component{
    render() {
        return (
            <div>
                <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
                {CountOfTransfer.map( (item, i) => {
                    return <p  key={i}><input type="checkbox" name="TransferCount" value={item} onChange={ () => {this.props.changeTransferCount(item)}} />{item}</p>
                })}
            </div>
        );
    }
}