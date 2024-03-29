import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(cors())
  .use(bodyParser.json({ limit: '30mb', extended: true }))
  .use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => res.send('Mementos API'));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, '0.0.0.0', () => console.log(`Server is running on port ${PORT}`)))
  .catch((error) => console.log(error.message));
