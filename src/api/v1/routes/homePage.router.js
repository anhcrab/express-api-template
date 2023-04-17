import express from 'express';
import HomePageController from '../controllers/homePage.controller.js';

const homeRouter = express.Router();
homeRouter.use('/', HomePageController.getHome)

export default homeRouter;
