import { RolesRepository } from '@roles/repositories/RolesRepository'
import { ListRolesUseCase } from './ListRolesUseCase'
import { ListRolesController } from './ListRolesController'

const rolesRepository = RolesRepository.getInstance()
const listRolesUseCase = new ListRolesUseCase(rolesRepository)
const listRolesController = new ListRolesController(listRolesUseCase)

export { listRolesController }
