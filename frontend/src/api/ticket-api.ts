import axios from 'axios';

import { ticketUrl } from "./urls";
import { headers } from "./headers";
import { FilterParamsInterface } from "../types/filterReducerTypes";

enum TICKET_LIMIT {
    MIN = 10,
    DEFAULT = 20,
    MAX= 50
}

enum TICKET_OFFSET {
    DEFAULT = 0
}

enum TICKET_CURRENCY {
    DEFAULT = "USD",
    RUB = "RUB",
    EUR = "EUR"
}

export class TicketApi {
    private HEADERS = {

    };

    static async getTickets( params: FilterParamsInterface ): Promise<any>{
        const {
            limit = TICKET_LIMIT.DEFAULT,
            offset = TICKET_OFFSET.DEFAULT,
            currency,
            transferCount
        } = params;

        const limitParam = `limit=${limit}`;
        const offsetParam = `offset=${offset}`;
        const paramsUrlArr = [limitParam, offsetParam];

        paramsUrlArr.push(currency ? `currency=${currency}` : ``);
        paramsUrlArr.push(transferCount ? `transferCount=${transferCount}` : ``);

        const paramsUrlStr = paramsUrlArr.slice(1).reduce( (acc, current ) => current ? `${acc}&${current}`: `${acc}`, paramsUrlArr[0]);

        const response = await axios.get(`${ticketUrl}?${paramsUrlStr}`, { headers });

        return response.data;
    }
}