import * as types from '../constants/filterTypes';
import { FilterParamsInterface } from '../types/filterReducerTypes';

const initialState: FilterParamsInterface = {
    currency : "",
    transferCountArr: [],
    limit: 10,
    offset: 0
};

export default function filterReducer( state = initialState , action: any ) {
    switch ( action.type ) {
        case types.CHANGE_CURRENCY:
            return {
                ...state,
                currency: action.currency,
                offset: initialState.offset
            };
        case types.CHANGE_TRANSFER_COUNT:
            return {
                ...state,
                transferCountArr: action.transferCountArr,
                offset: initialState.offset
            }
        case types.CHANGE_LIMIT:
            return {
                ...state,
                limit: action.limit
            }
        case types.CHANGE_OFFSET:
            return {
                ...state,
                offset: action.offset
            }
        case types.CLEAR_FILTERS:
            return initialState;

        default:
            return state;
    }
};