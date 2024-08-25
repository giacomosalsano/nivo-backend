import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { GetAllFramesUseCase } from './GetAllFramesUseCase'
import { Request, Response } from 'express'

class GetAllFramesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllFramesUseCase = container.resolve(GetAllFramesUseCase)

    const frame = await getAllFramesUseCase.execute()

    return response.json(classToClass(frame))
  }
}

export { GetAllFramesController }
