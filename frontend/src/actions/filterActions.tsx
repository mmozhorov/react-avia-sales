import * as types from '../constants/filterTypes';

export const changeCurrency = ( currency: string ) => ({
    type: types.CHANGE_CURRENCY,
    currency
});

export const changeTransferCount = ( transferCountArr: string[] ) => ({
    type: types.CHANGE_TRANSFER_COUNT,
    transferCountArr
});

export const changeLimit = ( limit: number ) => ({
   type: types.CHANGE_LIMIT,
   limit
});

export const changeOffset = ( offset: number ) => ({
   type: types.CHANGE_OFFSET,
   offset
});

export const changeOrderFilter = ( orderFilter: string ) => ({
    type: types.CHANGE_ORDER_FILTER,
    orderFilter
});

export const clearFilter = () => ({
    type: types.CLEAR_FILTERS
});


