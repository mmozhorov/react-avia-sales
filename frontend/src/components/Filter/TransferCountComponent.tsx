import React from 'react';

import { changeTransferCount } from "../../actions/filterActions";

import './TransferCountComponent.css';

const CountOfTransfer = [
    { label: "Все", value: "all" },
    { label: "Без пересадок", value: "none" },
    { label: "1 пересадка", value: "1" },
    { label: "2 пересадки", value: "2" },
    { label: "3 пересадки", value: "3" },
];

export const TransferCountComponent = () => {
    return (
        <div>
            <h5>Количество пересадок</h5>
            <div className="transfer-count-container">
                {CountOfTransfer.map( (item, i) => {
                    return(
                        <React.Fragment>
                            <input type="checkbox" value={item.value} id={`transfer-${i+1}`} />
                            <label htmlFor={`transfer-${i+1}`}>{item.label}</label>
                        </React.Fragment>
                    )
                    // return <p  key={i}><input type="checkbox" value={item} onChange={ () => dispatch(changeTransferCount(item)) } />{item}</p>
                })}
            </div>
        </div>
    );
}