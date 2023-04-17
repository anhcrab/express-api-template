import express from 'express';
import MessageController from '../controllers/message.controller.js';
import { modifyMessage } from '../middleware/index.js';

const messageRouter = express.Router();

messageRouter.get('/read', MessageController.getUsers);
messageRouter.get('/read/:id', MessageController.getUserById);
messageRouter.post('/create', modifyMessage, MessageController.saveUser)

export default messageRouter;
