import { EntityManager, MikroORM } from '@mikro-orm/core'

export interface Context {
  ip?: string | string[]
  currentUserId?: string
  orm?: MikroORM
  entityManager?: EntityManager
}
