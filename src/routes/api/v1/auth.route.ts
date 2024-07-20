import express from 'express';
import {
  signupHandler,
  loginHandler,
} from '../../../controllers/authControllers/auth.controller';

const authRoutes = express.Router();

// POST /api/v1/auth/signup - signup route
authRoutes.post('/signup', signupHandler);

// POST /api/v1/auth/login - login route
authRoutes.post('/login', loginHandler);

export default authRoutes;
