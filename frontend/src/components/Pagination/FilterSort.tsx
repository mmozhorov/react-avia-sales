import React, { useState } from 'react';

import './limit.css';

const LIMITS = [ '5', '10', '20', '50' ];
const ORDER_BY = [
    {
        label: 'По цене',
        value: 'price'
    },
    {
        label: 'По времени',
        value: 'time'
    },
    {
        label: 'По остановкам',
        value: 'stops'
    }];

export const FilterSort = ({ limit, handleLimit, handleSortFilter }) => {
    const [ isOpenedLimit, useOpenLimit ] = useState(false);
    const handleChangeLimit = ( limit ) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useOpenLimit(false);
        handleLimit(limit);
    }

    return(
        <div className="limit-container row">
            <div>
                <div className="limit-sort-block">
                    <span className="limit-sort-block__element">Сортировать по:</span>
                    {
                        ORDER_BY.map( filter =>
                            <span
                                onClick={ () => handleSortFilter(filter.value) }
                                className="limit-sort-block__element">
                                {filter.label}
                            </span>
                        )
                    }
                </div>
                {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
                <div className="limit-block" onClick={ () => useOpenLimit(!isOpenedLimit)}>{ limit }</div>
                <div className={`limit-dropdown ${isOpenedLimit ? '' : 'hidden'}`}>
                    {LIMITS.map( (limit, i) =>
                        <div key={i} className="limit-dropdown__list-element"
                             onClick={ () => handleChangeLimit(limit)}>
                            {limit}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}