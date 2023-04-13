import express from 'express';
import userRouter from './user.router.js';
import homeRouter from './homPage.router.js';

const indexRouter = express();

indexRouter.get('/', homeRouter);

indexRouter.use('/v1', userRouter);

export default indexRouter;
