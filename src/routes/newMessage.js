import { Router } from "express";
import newMessageController from '../controllers/newMessage.js'

const newMessageRouter = Router()

newMessageRouter.get('/newMessage', newMessageController.newMessage)

export default newMessageRouter;