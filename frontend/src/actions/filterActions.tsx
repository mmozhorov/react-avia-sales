import * as types from '../constants/filterTypes';

export const changeCurrency = ( currency: string ) => ({
    type: types.CHANGE_CURRENCY,
    currency
});

export const changeTransferCount = ( transferCountArr: string[] ) => ({
    type: types.CHANGE_TRANSFER_COUNT,
    transferCountArr
});

export const clearFilter = () => ({
    type: types.CLEAR_FILTERS
});


