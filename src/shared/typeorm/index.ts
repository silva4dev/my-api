import { DataSource } from 'typeorm'
import { CreateRolesTable1688786922324 } from './migrations/1688786922324-CreateRolesTable'
import { Role } from '@roles/entities/Role'
import { CreateUsersTable1690238192108 } from './migrations/1690238192108-CreateUsersTable'
import { AddRoleIdToUsersTable1657997456404 } from './migrations/1690238725006-AddRoleIdToUsersTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [
    CreateRolesTable1688786922324,
    CreateUsersTable1690238192108,
    AddRoleIdToUsersTable1657997456404,
  ],
})
