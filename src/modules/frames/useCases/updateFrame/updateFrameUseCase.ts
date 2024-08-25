import { Frame } from '@modules/frames/models/Frames'
import { IFramesRepository } from '@modules/frames/repositories/IFramesRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  id: string
  name: string
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
    const newFrame = await this.framesRepository.update({ ...frames, ...data })

    return newFrame
  }
}

export { UpdateFrameUseCase }
