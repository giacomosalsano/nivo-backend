import { ICreateFrameDTO } from '@modules/frames/dtos/ICreateFrameDTO'
import { IUpdateFrameDTO } from '@modules/frames/dtos/IUpdateFrameDTO'
import { Frame } from '@modules/frames/models/Frames'
import { IFramesRepository } from '@modules/frames/repositories/IFramesRepository'
import { prisma } from '@shared/infra/prisma'

class FramesRepository implements IFramesRepository {
  private repository: typeof prisma.frame

  constructor() {
    this.repository = prisma.frame
  }

  public async create({ name, htmlContent }: ICreateFrameDTO): Promise<Frame> {
    const frame = await this.repository.create({
      data: {
        name,
        htmlContent,
      },
    })

    return frame
  }

  public async findById(id: string): Promise<Frame | undefined> {
    const frame = await this.repository.findFirst({
      where: {
        id,
      },
    })

    return frame
  }

  public async findByName(name: string): Promise<Frame | null> {
    const frame = await this.repository.findFirst({
      where: {
        name,
      },
    })

    return frame
  }

  public async findAll(): Promise<Frame[]> {
    const frames = await this.repository.findMany()

    return frames
  }

  public async update({
    id,
    name,
    htmlContent,
  }: IUpdateFrameDTO): Promise<Frame> {
    const frame = await this.repository.update({
      where: { id },
      data: { name, htmlContent },
    })

    return frame
  }

  public async delete(id: string): Promise<Frame> {
    const frame = await this.repository.delete({
      where: {
        id,
      },
    })

    return frame
  }
}

export { FramesRepository }
