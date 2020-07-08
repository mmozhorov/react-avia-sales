import * as express from 'express';
import { TicketsService } from '../services/tickets.service';

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response ) => {
    const [ ticketsCount, tickets ] = await TicketsService.getTickets(req.query);

    res.send({
        ticketsCount,
        tickets
    });
});

export default router;