import { celebrate, Segments, Joi } from 'celebrate'
import { Router } from 'express'

import { CreateFrameController } from '@modules/frames/useCases/createFrame/CreateFrameController'
import { GetFrameByIdController } from '@modules/frames/useCases/getFrameById/GetFrameByIdController'
import { GetAllFramesController } from '@modules/frames/useCases/getAllFrames/GetAllFramesController'
import { UpdateFrameController } from '@modules/frames/useCases/updateFrame/UpdateFrameController'
import { DeleteFrameController } from '@modules/frames/useCases/deleteFrame/DeleteFrameController'
import { GetFrameByNameController } from '@modules/frames/useCases/getFrameByName/GetFrameByNameController'

const framesRoutes = Router()

const createFrameController = new CreateFrameController()
const getFrameByIdController = new GetFrameByIdController()
const getFrameByNameController = new GetFrameByNameController()
const getAllFramesController = new GetAllFramesController()
const updateFrameController = new UpdateFrameController()
const deleteFrameController = new DeleteFrameController()

framesRoutes.post(
  '/createFrame',
  celebrate({
    [Segments.BODY]: {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      frameNameSlug: Joi.string().required(),
      htmlContent: Joi.string().required(),
    },
  }),
  createFrameController.handle,
)

framesRoutes.get(
  '/getById/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  getFrameByIdController.handle,
)

framesRoutes.get(
  '/getByName/:frameNameSlug',
  celebrate({
    [Segments.PARAMS]: {
      frameNameSlug: Joi.string().required(),
    },
  }),
  getFrameByNameController.handle,
)

framesRoutes.get('/', getAllFramesController.handle)

framesRoutes.put(
  '/editFrame/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      frameNameSlug: Joi.string().required(),
      htmlContent: Joi.string().required(),
    },
  }),
  updateFrameController.handle,
)

framesRoutes.delete(
  '/deleteFrame/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  deleteFrameController.handle,
)

export { framesRoutes }
