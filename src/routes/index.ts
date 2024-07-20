import express, { Request, Response } from 'express';
import api from './api';

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
  return res.send('Everything is working fine');
});

routes.use('/api', api);

export default routes;
