import { Request, Response } from 'express'
import { ShowRoleUseCase } from './ShowRoleUseCase'
import { container } from 'tsyringe'

export class ShowRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showRoleUseCase = container.resolve(ShowRoleUseCase)
    const { id } = request.params
    const role = await showRoleUseCase.execute({ id })
    return response.status(200).json(role)
  }
}
