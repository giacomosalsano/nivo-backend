import { ICreateUserDTO } from '../dtos/ICreateUserDTO'
import { Frame } from '../models/Frames'

interface IFramesRepository {
  create(data: ICreateUserDTO): Promise<Frame>
}

export { IFramesRepository }
