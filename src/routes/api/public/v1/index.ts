import express from 'express';
import {
  signupHandler,
  loginHandler,
} from '../../../../controllers/auth.controller';

const app = express.Router();

/**
 * default routes
 */
app.get('/', (req, res) => {
  return res.send('Public Route');
});

/**
 * auth routes
 */
app.post('/signup', signupHandler); // POST /api/public/v1/auth/signup - signup route
app.post('/login', loginHandler); // POST /api/public/v1/auth/login - login route

/**
 * product routes
 */
app.get('/products', (req, res) => {
  return res.send('Public Route For Get all Products');
})


export default app;
