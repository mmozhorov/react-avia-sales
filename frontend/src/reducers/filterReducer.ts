import * as types from '../constants/filterTypes';
import { FilterParamsInterface } from '../types/filterReducerTypes';

const initialState: FilterParamsInterface = {
    isSetParameters : false,
    currency : "",
    transferCountArr: []
};

export default function filterReducer( state = initialState , action: any ) {
    switch ( action.type ) {
        case types.CHANGE_CURRENCY:
            return {
                ...state,
                currency: action.currency
            };
        case types.CHANGE_TRANSFER_COUNT:
            return {
                ...state,
                transferCountArr: action.transferCountArr
            }
        case types.CLEAR_FILTERS:
            return {
                ...state,
                isSetParameters: false
            }
        default:
            return state;
    }
};