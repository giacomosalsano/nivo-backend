import { ICreateFrameDTO } from '../dtos/ICreateFrameDTO'
import { IUpdateFrameDTO } from '../dtos/IUpdateFrameDTO'
import { Frame } from '../models/Frames'

interface IFramesRepository {
  create(data: ICreateFrameDTO): Promise<Frame>
  findById(id: string): Promise<Frame | undefined>
  findByName(name: string): Promise<Frame | undefined>
  findAll(): Promise<Frame[]>
  update(data: IUpdateFrameDTO): Promise<Frame | undefined>
  delete(id: string): Promise<Frame | undefined>
}

export { IFramesRepository }
