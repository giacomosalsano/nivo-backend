import { ICreateFrameDTO } from '@modules/frames/dtos/ICreateFrameDTO'
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
}

export { FramesRepository }
