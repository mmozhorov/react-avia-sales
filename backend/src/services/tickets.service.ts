const ticketModel = require('../models/ticket.model');

export class TicketsService{
    static async getTickets( queries ){
        const {
            limit = 20,
            offset = 0,
            currency,
            stops
        } = queries;

        const queryParams = {};

        if (typeof currency !== 'undefined')
            Object.assign(queryParams, { currency });
        if (typeof stops !== 'undefined')
            Object.assign(queryParams, { stops });

        return await ticketModel.find(queryParams, { '_id': 0, '__v': 0 }).skip(Number(offset)).limit(Number(limit));
    }
}