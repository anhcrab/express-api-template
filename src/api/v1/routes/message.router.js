import express from 'express';
import UserController from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get('/read', UserController.getUsers);
userRouter.get('/read/:id', UserController.getUsersById);

export default userRouter;
