import { inject, injectable } from 'tsyringe'
import { Frame } from '@modules/frames/models/Frames'
import { IFramesRepository } from '@modules/frames/repositories/IFramesRepository'

@injectable()
class GetAllFramesUseCase {
  constructor(
    @inject('FramesRepository')
    private framesRepository: IFramesRepository,
  ) {}

  public async execute(): Promise<Frame[]> {
    const frames = await this.framesRepository.findAll()
    return frames
  }
}

export { GetAllFramesUseCase }
