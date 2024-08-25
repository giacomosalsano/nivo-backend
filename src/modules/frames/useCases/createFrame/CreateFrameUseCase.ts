/* eslint-disable @typescript-eslint/no-unused-vars */
import { inject, injectable } from 'tsyringe'

import { IFramesRepository } from '@modules/frames/repositories/IFramesRepository'
import { AppError } from '@shared/errors/AppError'
import { Frame } from '@modules/frames/models/Frames'

interface IRequest {
  name: string
  htmlContent: string
}

@injectable()
class CreateFrameUseCase {
  constructor(
    @inject('FramesRepository')
    private framesRepository: IFramesRepository,
  ) {}

  public async execute({ name, htmlContent }: IRequest): Promise<Frame> {
    const frameAlreadyExists = await this.framesRepository.findByName(name)

    if (frameAlreadyExists) {
      throw new AppError(
        'A frame with this name already exists. Please choose another name.',
        400,
      )
    }

    const frame = await this.framesRepository.create({
      name,
      htmlContent,
    })
    return frame
  }
}

export { CreateFrameUseCase }
