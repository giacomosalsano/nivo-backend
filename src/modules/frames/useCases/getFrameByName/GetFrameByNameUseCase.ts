import { inject, injectable } from 'tsyringe'

import { Frame } from '@modules/frames/models/Frames'

import { IFramesRepository } from '@modules/frames/repositories/IFramesRepository'
import { AppError } from '@shared/errors/AppError'

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

    if (!frame) {
      throw new AppError(
        'src/modules/frames/useCases/getFrameById/GetFrameByIdUseCase.ts',
        404,
      )
    }

    return frame
  }
}

export { GetFrameByNameUseCase }
