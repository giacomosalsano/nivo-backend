import { ICreateFrameDTO } from '../dtos/ICreateFrameDTO'
import { Frame } from '../models/Frames'

interface IFramesRepository {
  create(data: ICreateFrameDTO): Promise<Frame>
  findById(id: string): Promise<Frame | undefined>
}

export { IFramesRepository }
