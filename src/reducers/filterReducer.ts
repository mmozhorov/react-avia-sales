import * as types from '../constants/filterTypes';

const initialState = {
    isSetParameters : false,
    customParameters: {
        currency : "",
        transferCount : []
    }
};

export default function filter( state = initialState , action ) {

    const customParameters = {...state.customParameters};

    switch ( action.type ) {
        case types.CHANGE_CURRENCY:

            customParameters.currency = action.currency;

            return {
                ...state,
                isSetParameters : true,
                customParameters : customParameters
            };

        case types.CHANGE_TRANSFER_COUNT:

            const transferCount = customParameters.transferCount.find( item => item === action.transferCount);
            if (transferCount){
                customParameters.transferCount = customParameters.transferCount.filter( item => item !== action.transferCount);
            }
            else {
                customParameters.transferCount.push(action.transferCount);
            }

            return {
                ...state,
                isSetParameters : true,
                customParameters : customParameters
            };


        default:
            return state;
    }
};