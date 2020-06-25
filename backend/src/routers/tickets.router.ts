const express = require('express');
const errorHandler = require('../handlers/error.handler');

const ticketsRouter = express.Router();

@errorHandler
ticketsRouter.get('/', async (req, res, next) => {

});

module.exports = ticketsRouter;