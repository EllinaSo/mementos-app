import express from 'express';

import { signIn, signUp } from '../controllers/users.js';

const routes = express.Router();

routes.post('/sign-in', signIn);
routes.post('/sign-up', signUp);

export default routes;
