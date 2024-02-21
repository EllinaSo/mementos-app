import express from 'express';

import { getPosts, createPost, updatePost } from '../controllers/posts.js'

const routes = express.Router();

routes.get('/', getPosts)
routes.post('/', createPost);
routes.patch('/:id', updatePost);

export default routes;