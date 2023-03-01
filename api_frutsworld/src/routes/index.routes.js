import {Router} from 'express'

import {ping} from '../controllers/index.controller.js'
const router = Router()

router.get("/pong", ping);


export default router;