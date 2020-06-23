import { useDispatch, useSelector } from 'react-redux';
import {FilterParamsInterface} from "../types/filterReducerTypes";

export const useFilters = () => {
    const dispatch = useDispatch();
    const filters = useSelector( (state: any): FilterParamsInterface => state.filters );

    return {
        dispatch,
        filters
    };
}