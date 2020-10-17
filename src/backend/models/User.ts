import { Entity, Property, Unique } from '@mikro-orm/core'
import { BaseEntity } from './BaseEntity'
import bcrypt from 'bcrypt'

@Entity()
export class User extends BaseEntity {
  @Property()
  name: string

  @Property()
  @Unique()
  email: string

  @Property()
  password: string

  constructor(name: string, email: string, password: string) {
    super()
    this.name = name
    this.email = email
    this.password = bcrypt.hashSync(password, 10)
  }

  verifyPassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password)
  }
}
