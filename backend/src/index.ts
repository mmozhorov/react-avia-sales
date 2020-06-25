const express = require('express');
const cors = require('cors')
const path = require('path');

const env = require('dotenv').config().parsed;
const dbConnect = require('./db/config').connectToDb;
const messages = require('./utils/messages.json');
const ticketsRouter = require('./routers/tickets.router');

(async function main() {
    await dbConnect(env);
    const app = express();

    app.use(cors());
    app.use(express.static(path.join(__dirname, '../build')));

    app.use('/tickets', ticketsRouter);

    app.use('*', async (req, res, next) => {
        res.status(404).send(messages.common.errors.notFound);
    });

    app.listen(env.APP_PORT, () => {
        console.log(`Server is running on ${env.APP_PORT} port!`);
    });
}());