import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

const routes = express.Router();

routes.get('/', getPosts);
routes.post('/', createPost);
routes.patch('/:id', updatePost);
routes.patch('/:id/like', likePost);
routes.delete('/:id', deletePost);

export default routes;
