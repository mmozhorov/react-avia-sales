import axios from 'axios';

import { ticketUrl } from "./urls";
import { headers } from "./headers";
import { FilterParamsInterface } from "../types/filterReducerTypes";

enum TICKET_LIMIT {
    DEFAULT = 20,
}

enum TICKET_OFFSET {
    DEFAULT = 0
}

export class TicketApi {
    static async getTickets( params: FilterParamsInterface ): Promise<any>{
        const {
            limit = TICKET_LIMIT.DEFAULT,
            offset = TICKET_OFFSET.DEFAULT,
            currency,
            transferCountArr
        } = params;

        const limitParam = `limit=${limit}`;
        const offsetParam = `offset=${offset}`;
        const paramsUrlArr = [limitParam, offsetParam];

        paramsUrlArr.push(currency ? `currency=${currency}` : ``);

        if (transferCountArr.length){
            for( let desiredCount of transferCountArr )
                paramsUrlArr.push(`transferCount=${desiredCount}`);
        }

        const paramsUrlStr = paramsUrlArr.slice(1).reduce( (acc, current ) => current ? `${acc}&${current}`: `${acc}`, paramsUrlArr[0]);

        const { data } = await axios.get(`${ticketUrl}?${paramsUrlStr}`, { headers });

        return data;
    }
}