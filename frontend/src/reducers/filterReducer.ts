import * as types from '../constants/filterTypes';
import { FilterParamsInterface } from '../types/filterReducerTypes';

const initialState: FilterParamsInterface = {
    isSetParameters : false,
    currency : "",
    transferCount: 0
};

export default function filter( state = initialState , action: any ) {
    switch ( action.type ) {
        case types.CHANGE_CURRENCY:
            return {
                ...state,
                currency: action.currency
            };
        case types.CHANGE_TRANSFER_COUNT:
            return {
                ...state,
                transferCount: action.transferCount
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