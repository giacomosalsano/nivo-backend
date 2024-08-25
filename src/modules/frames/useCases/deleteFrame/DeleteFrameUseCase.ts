import { IFramesRepository } from '@modules/frames/repositories/IFramesRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  id: string
}

interface IResponse {
  message: string
}

@injectable()
class DeleteFrameUseCase {
  constructor(
    @inject('FramesRepository')
    private freamesRepository: IFramesRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<IResponse> {
    const frame = await this.freamesRepository.findById(id)

    if (!frame) {
      throw new AppError('It Looks like this frame does not exist...', 404)
    }

    await this.freamesRepository.delete(id)

    return {
      message: 'Frame deleted successfully.',
    }
  }
}

export { DeleteFrameUseCase }
