import { RolesPaginateProperties } from '@roles/repositories/IRolesRepository'
import { RolesRepository } from '@roles/repositories/RolesRepository'

type ListRolesUseCaseParams = {
  limit: number
  page: number
}

export class ListRolesUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute({
    limit,
    page,
  }: ListRolesUseCaseParams): Promise<RolesPaginateProperties> {
    const take = limit
    const skip = (Number(page) - 1) * take
    return this.rolesRepository.findAll({ page, skip, take })
  }
}
