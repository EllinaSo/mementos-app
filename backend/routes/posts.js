import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js'

const routes = express.Router();

routes.get('/', getPosts)
    .post('/', createPost);

export default routes;