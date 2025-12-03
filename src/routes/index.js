import { Router } from "express";
import rootController from '../controllers/index.js'

const rootRouter = Router()

rootRouter.get('/', rootController.root)
rootRouter.post('/', rootController.save)

export default rootRouter;