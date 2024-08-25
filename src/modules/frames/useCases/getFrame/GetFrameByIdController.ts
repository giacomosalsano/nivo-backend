import { Response, Request } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { GetFrameByIdUseCase } from './GetFrameByIdUseCase'

class GetFrameByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const getFrameByIdUseCase = container.resolve(GetFrameByIdUseCase)

    const frame = await getFrameByIdUseCase.execute({ id })

    return response.json(classToClass(frame))
  }
}

export { GetFrameByIdController }
