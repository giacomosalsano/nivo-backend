import { celebrate, Segments, Joi } from 'celebrate'
import { Router } from 'express'

import { CreateFrameController } from '@modules/frames/useCases/createFrame/CreateFrameController'
import { GetFrameByIdController } from '@modules/frames/useCases/getFrameById/GetFrameByIdController'
import { GetAllFramesController } from '@modules/frames/useCases/getAllFrames/GetAllFramesController'

const framesRoutes = Router()

const createFrameController = new CreateFrameController()
const getFrameByIdController = new GetFrameByIdController()
const getAllFramesController = new GetAllFramesController()

framesRoutes.post(
  '/createFrame',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      htmlContent: Joi.string().required(),
    },
  }),
  createFrameController.handle,
)

framesRoutes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  getFrameByIdController.handle,
)

framesRoutes.get('/', getAllFramesController.handle)

export { framesRoutes }
