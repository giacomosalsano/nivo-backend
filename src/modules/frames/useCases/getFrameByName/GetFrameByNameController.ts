import { Request, Response } from 'express'
import { classToClass } from 'class-transformer'
import { container } from 'tsyringe'

import { GetFrameByNameUseCase } from './GetFrameByNameUseCase'

class GetFrameByNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const frameNameSlug: string = request.query.frameNameSlug as string

    const getFrameByNameUseCase = container.resolve(GetFrameByNameUseCase)

    const frame = await getFrameByNameUseCase.execute({ frameNameSlug })

    return response.json(classToClass(frame))
  }
}

export { GetFrameByNameController }
