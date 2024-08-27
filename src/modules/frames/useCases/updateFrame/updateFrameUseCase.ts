import { inject, injectable } from 'tsyringe'
import { AppError } from '@shared/errors/AppError'

import { IFramesRepository } from '@modules/frames/repositories/IFramesRepository'
import { Frame } from '@modules/frames/models/Frames'

interface IRequest {
  id: string
  firstName: string
  lastName: string
  frameNameSlug: string
  htmlContent: string
}

@injectable()
class UpdateFrameUseCase {
  constructor(
    @inject('FramesRepository')
    private framesRepository: IFramesRepository,
  ) {}

  public async execute(data: IRequest): Promise<Frame> {
    const frame = await this.framesRepository.findById(data.id)

    if (!frame) {
      throw new AppError('It looks like this frame does not exist...', 404)
    }
    const newFrame = await this.framesRepository.update({ ...frame, ...data })

    return newFrame
  }
}

export { UpdateFrameUseCase }
