import logger from 'morgan';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import indexRouter from './api/v1/routes/router.js';

const app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(cookieParser());
app.use('/api', indexRouter);

export default app;
