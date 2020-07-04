import * as express from 'express';
import { TicketsService } from '../services/tickets.service';

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response ) => {
    const { limit, offset } = req.query;
    res.send(await TicketsService.getTickets(Number(limit), Number(offset)));
});

export default router;