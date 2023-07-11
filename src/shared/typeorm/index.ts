import { DataSource } from 'typeorm'
import { CreateRolesTable1688786922324 } from './migrations/1688786922324-CreateRolesTable'
import { Role } from '@roles/entities/Role'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1688786922324],
})
