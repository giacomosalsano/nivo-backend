import { inject, injectable } from 'tsyringe'
import { AppError } from '@shared/errors/AppError'

import { IFramesRepository } from '@modules/frames/repositories/IFramesRepository'

import { Frame } from '@modules/frames/models/Frames'

interface IRequest {
  frameNameSlug: string
}

@injectable()
class GetFrameByNameUseCase {
  constructor(
    @inject('FramesRepository')
    private framesRepository: IFramesRepository,
  ) {}

  public async execute({ frameNameSlug }: IRequest): Promise<Frame> {
    const frame = await this.framesRepository.findByName(frameNameSlug)
    console.log('Looking for frame with name:', frame)

    if (!frame) {
      console.log(frame, 'not found')
      throw new AppError('It looks like this frame does not exist...', 404)
    }
    console.log('Frame found:', frame.frameNameSlug)
    return frame
  }
}

export { GetFrameByNameUseCase }
