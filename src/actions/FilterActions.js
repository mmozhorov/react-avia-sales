import * as types from '../constants/FilterTypes';


export function changeCurrency( params ) {
    return {
      type: types.CHANGE_CURRENCY,
      currency : params
    };
}

export function changeTransferCount( params ) {
    return {
        type: types.CHANGE_TRANSFER_COUNT,
        transferCount : params
    };
}


