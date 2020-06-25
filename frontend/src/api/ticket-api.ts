import axios from 'axios';

import { ticketUrl } from "./urls";
import { headers } from "./headers";

enum TICKET_LIMIT {
    MIN = 10,
    DEFAULT = 20,
    MAX= 50
}

enum TICKET_OFFSET {
    DEFAULT = 0
}

export class TicketApi {
    private HEADERS = {

    };

    static async getTickets( params ): Promise<any>{
        const {
            limit = TICKET_LIMIT.DEFAULT,
            offset = TICKET_OFFSET.DEFAULT
        } = params;

        const response = await axios.get(`${ticketUrl}`, { headers });

        return response.data;
    }
}