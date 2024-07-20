import express from 'express';

import publicRoute from './public';
import privateRoute from './private';

const routes = express.Router();

routes.use('/public', publicRoute);
routes.use('/private', privateRoute);

export default routes;
