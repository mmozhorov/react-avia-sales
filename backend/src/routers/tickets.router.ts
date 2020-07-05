import * as express from 'express';
import { TicketsService } from '../services/tickets.service';

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response ) => {
    res.send(await TicketsService.getTickets(req.query));
});

export default router;