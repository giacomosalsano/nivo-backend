import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO'
import { Frame } from '@modules/frames/models/Frames'
import { IFramesRepository } from '@modules/frames/repositories/IFramesRepository'
import { prisma } from '@shared/infra/prisma'

class FramesRepository implements IFramesRepository {
  private repository: typeof prisma.user

  constructor() {
    this.repository = prisma.user
  }

  async findByEmail(email: string): Promise<Frame> {
    const user = await this.repository.findFirst({
      where: {
        email,
      },
    })

    return user
  }

  public async create({
    email,
    name,
    password,
    phone,
    tenantId,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.repository.create({
      data: {
        email,
        name,
        password,
        phone,
        tenantId,
      },
    })

    return user
  }
}

export { UsersRepository }
