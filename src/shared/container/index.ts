import { container } from 'tsyringe'

import '@shared/container/providers'

import { FramesRepository } from '@modules/frames/infra/prisma/repositories/FramesRepository'
import { IFramesRepository } from '@modules/frames/repositories/IFramesRepository'

container.registerSingleton<IFramesRepository>(
  'FramesRepository',
  FramesRepository,
)
