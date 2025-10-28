import { Router } from 'express'

import { receiveUrl } from '../controllers/analyze'

const router = Router()

router.post('/', receiveUrl)

export default router
