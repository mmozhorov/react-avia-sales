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

        return await ticketModel.find({  }, { '_id': 0, '__v': 0 }, { limit: Number(limit), offset: Number(offset) });
        //return await ticketModel.find({ 'stops': stops }, { '_id': 0, '__v': 0 }).skip(offset).limit(limit);
    }
}