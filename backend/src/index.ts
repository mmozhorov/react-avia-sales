import express = require('express');
import cors = require('cors');
import path = require('path');
import { config } from 'dotenv';

import { connectToDb } from './db/config';
import messages  from './utils/messages.json';
import ticketRouter from './routers/tickets.router';

(async function main() {
    const env: any = config().parsed;
    await connectToDb(env);
    const app = express();

    app.use(cors());
    app.use(express.static(path.join(__dirname, '../build')));

    app.use('/tickets', ticketRouter);

    app.use('*', async (req, res, next) => {
        res.status(404).send(messages.common.errors.notFound);
    });

    app.listen(env.APP_PORT, () => {
        console.log(`Server is running on ${env.APP_PORT} port!`);
    });
}());