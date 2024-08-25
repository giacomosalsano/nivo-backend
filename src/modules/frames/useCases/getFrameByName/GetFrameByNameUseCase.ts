import { inject, injectable } from 'tsyringe'
import { AppError } from '@shared/errors/AppError'

import { IFramesRepository } from '@modules/frames/repositories/IFramesRepository'

import { Frame } from '@modules/frames/models/Frames'

interface IRequest {
  name: string
}

@injectable()
class GetFrameByNameUseCase {
  constructor(
    @inject('FramesRepository')
    private framesRepository: IFramesRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<Frame> {
    const frame = await this.framesRepository.findByName(name)
    console.log('Looking for frame with name:', frame)

    if (!frame) {
      console.log(frame, 'not found')
      throw new AppError('It looks like this frame does not exist...', 404)
    }
    console.log('Frame found:', frame.name)
    return frame
  }
}

export { GetFrameByNameUseCase }
