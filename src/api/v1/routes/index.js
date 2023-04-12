import express from 'express';
import { testEvironmentVariable } from '../setting.js';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({
  message: 'Welcome to Express API template',
  test: testEvironmentVariable,
}));

export default indexRouter;
