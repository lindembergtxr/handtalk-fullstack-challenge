import { Router } from 'express'

import analyzeRoutes from './analyze.routes'

export const router = Router()

router.use('/analyze', analyzeRoutes)
