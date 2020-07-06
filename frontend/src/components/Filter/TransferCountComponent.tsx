import React from 'react';

import './TransferCountComponent.css';

const CountOfTransfer = [
    { label: "Все", value: "all" },
    { label: "Без пересадок", value: "0" },
    { label: "1 пересадка", value: "1" },
    { label: "2 пересадки", value: "2" },
    { label: "3 пересадки", value: "3" },
];

export const TransferCountComponent = ({ handleTransferCount, transferCountArr }) => {

    const handleTransferCheckbox = ({ target: { value } }) => {
        const oldCheckedTransferCountArr = [...transferCountArr];

        if (oldCheckedTransferCountArr.find( item =>  item === value) !== undefined)
            handleTransferCount(oldCheckedTransferCountArr.filter( item => item !== value));
        else
            handleTransferCount([...oldCheckedTransferCountArr, value]);
    }

    return (
        <div>
            <h5>Количество пересадок</h5>
            <div className="transfer-count-container">
                {CountOfTransfer.map( (item, i) => {
                    return(
                        <React.Fragment key={i}>
                            <input id={`transfer-${i+1}`}
                                   type="checkbox"
                                   value={item.value}
                                   onChange={handleTransferCheckbox}
                                   checked={transferCountArr.find( count =>  count === item.value) !== undefined }
                            />
                            <label htmlFor={`transfer-${i+1}`}>{item.label}</label>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    );
}