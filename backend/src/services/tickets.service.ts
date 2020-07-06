import { paginationFormatter, transferCountFormatter } from "../utils/queryFormatter";

const ticketModel = require('../models/ticket.model');

export class TicketsService{
    static async getTickets( queries ){
        const {
            currency
        } = queries;

        const { limit, offset } = paginationFormatter(queries);
        const stops = transferCountFormatter(queries);

        const queryParams = {};

        if (typeof currency !== 'undefined')
            Object.assign(queryParams, { currency });


        if(stops.length)
            Object.assign(queryParams, { 'stops':  { $in:stops } });

        return await ticketModel.find(queryParams, { '_id': 0, '__v': 0 }).skip(offset).limit(limit);
    }
}