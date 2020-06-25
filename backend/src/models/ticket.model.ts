const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    origin: { type: String, required: true },
    origin_name: { type: String, required: true },
    destination: { type: String, required: true },
    destination_name: { type: String, required: true },
    departure_date: { type: Date },
    departure_time: { type: String },
    arrival_date: { type: Date },
    arrival_time: { type: String },
    carrier: { type: String, required: true },
    stops: { type: Number, required: true },
    price: { type: Number, required: true }
});
const ticketModel = mongoose.model('tickets', ticketSchema);

module.exports = ticketModel;