import { Router } from 'express'
import { framesRoutes } from './frames.routes'

const router = Router()

router.use('/frames', framesRoutes)

export { router }
