import { classToClass } from 'class-transformer'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteFrameUseCase } from './DeleteFrameUseCase'

class DeleteFrameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const deleteFrame = container.resolve(DeleteFrameUseCase)

    const frame = await deleteFrame.execute({ id })

    return response.json(classToClass(frame))
  }
}

export { DeleteFrameController }
