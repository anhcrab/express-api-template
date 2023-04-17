import express from 'express';
import messageRouter from './message.router.js';
import homeRouter from './homePage.router.js';

const indexRouter = express();

indexRouter.get('/', homeRouter);

indexRouter.use('/v1', messageRouter);

export default indexRouter;
