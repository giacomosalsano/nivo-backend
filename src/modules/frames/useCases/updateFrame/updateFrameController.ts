import { classToClass } from 'class-transformer'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateFrameUseCase } from './updateFrameUseCase'

class UpdateFrameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { name, htmlContent } = request.body

    const updateFrame = container.resolve(UpdateFrameUseCase)

    const frame = await updateFrame.execute({
      id,
      name,
      htmlContent,
    })

    return response.json(classToClass(frame))
  }
}

export { UpdateFrameController }
