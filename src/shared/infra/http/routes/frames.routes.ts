import { celebrate, Segments, Joi } from 'celebrate'
import { Router } from 'express'

import { CreateFrameController } from '@modules/frames/useCases/createFrame/CreateFrameController'
import { userInfo } from 'os'
import { GetFrameByIdController } from '@modules/frames/useCases/getFrame/GetFrameByIdController'

const framesRoutes = Router()

const createFrameController = new CreateFrameController()
const getFrameByIdController = new GetFrameByIdController()

framesRoutes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  getFrameByIdController.handle,
)

framesRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      htmlContent: Joi.string().required(),
    },
  }),
  createFrameController.handle,
)

export { framesRoutes }
