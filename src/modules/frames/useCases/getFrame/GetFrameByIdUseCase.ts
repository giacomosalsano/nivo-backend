import { inject, injectable } from 'tsyringe'

import { Frame } from '@modules/frames/models/Frames'

import { IFramesRepository } from '@modules/frames/repositories/IFramesRepository'
import { AppError } from '@shared/errors/AppError'

interface IRequest {
  id: string
}

@injectable()
class GetFrameByIdUseCase {
  constructor(
    @inject('FramesRepository')
    private framesRepository: IFramesRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Frame> {
    const frame = await this.framesRepository.findById(id)

    if (!frame) {
      throw new AppError('It Looks like this frame does not exist...', 404)
    }

    return frame
  }
}

export { GetFrameByIdUseCase }
