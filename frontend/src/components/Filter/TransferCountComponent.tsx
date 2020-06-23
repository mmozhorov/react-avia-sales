import React from 'react';

import { useFilters } from "../../hooks/useFilters";
import { changeTransferCount } from "../../actions/filterActions";

const CountOfTransfer = [ "Все", "Без пересадок", "1 пересадка", "2 пересадки", "3 пересадки" ];

export const TransferCountComponent = () => {
    const { dispatch } = useFilters();
    return (
        <div>
            <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
            {CountOfTransfer.map( (item, i) => {
                return <p  key={i}><input type="checkbox" value={item} onChange={ () => dispatch(changeTransferCount(item)) } />{item}</p>
            })}
        </div>
    );
}