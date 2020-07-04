const ticketModel = require('../models/ticket.model');

export class TicketsService{
    static async getTickets( limit: number = 20, offset: number = 1 ){
        return await ticketModel.find({}, { '_id': 0, '__v': 0 }).skip(offset).limit(limit);
    }
}