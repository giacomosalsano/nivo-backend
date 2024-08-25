import { Request, Response } from 'express'
import { classToClass } from 'class-transformer'
import { container } from 'tsyringe'

import { GetFrameByNameUseCase } from './GetFrameByNameUseCase'

class GetFrameByNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const name: string = request.query.name as string

    const getFrameByNameUseCase = container.resolve(GetFrameByNameUseCase)

    const frame = await getFrameByNameUseCase.execute({ name })

    return response.json(classToClass(frame))
  }
}

export { GetFrameByNameController }
