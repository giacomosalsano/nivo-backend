import { Response, Request } from 'express'
import { container } from 'tsyringe'
import { CreateFrameUseCase } from './CreateFrameUseCase'
import { classToClass } from 'class-transformer'

class CreateFrameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { firstName, lastName, frameNameSlug, htmlContent } = request.body

    const createFrameUseCase = container.resolve(CreateFrameUseCase)

    const frame = await createFrameUseCase.execute({
      firstName,
      lastName,
      frameNameSlug,
      htmlContent,
    })

    return response.json(classToClass(frame))
  }
}

export { CreateFrameController }
