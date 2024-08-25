import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";

class GetFrameByNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.params

    const getFrameByNameUseCase = container.resolve(GetFrameByNameUseCase)

    const frame = await getFrameByNameUseCase.execute({ name })

    return response.json(classToClass(frame))
  }
}

export { GetFrameByNameController }