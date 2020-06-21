import * as types from '../constants/filterTypes';

export const changeCurrency = ( currency: string ) => ({
    type: types.CHANGE_CURRENCY,
    currency
});

export const changeTransferCount = ( transferCount: string ) => ({
    type: types.CHANGE_TRANSFER_COUNT,
    transferCount
});


