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
            currency = TICKET_CURRENCY.DEFAULT,
            transferCount
        } = params;

        const currencyParam = currency ? `currency=${currency}` : ``;
        const transferCountParam = transferCount ? `transferCount=${transferCount}` : ``;
        const limitParam = `limit=${limit}`;
        const offsetParam = `offset=${offset}`;

        const paramsUrl = [currencyParam, transferCountParam, limitParam, offsetParam].join("&");


        console.log(paramsUrl);
        const response = await axios.get(`${ticketUrl}?${paramsUrl}`, { headers });

        return response.data;
    }
}