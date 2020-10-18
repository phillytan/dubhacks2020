import { Entity, Enum, ManyToMany, Property, Unique, Collection, OneToMany } from '@mikro-orm/core'
import { BaseEntity } from './BaseEntity'
import bcrypt from 'bcrypt'

export enum UserType {
  COMPANY = 'company',
  INFLUENCER = 'influencer'
}

@Entity()
export class User extends BaseEntity {
  @Property()
  name: string

  @Property()
  @Unique()
  email: string

  @Property()
  password: string

  @Enum()
  type: UserType

  @Property()
  elo: number

  @ManyToMany(() => User)
  matched = new Collection<User>(this)

  @ManyToMany(() => User)
  staredUsers = new Collection<User>(this)

  // When I mean user I actually mean the influencer
  constructor(name: string, email: string, password: string, type: UserType = UserType.COMPANY) {
    super()
    this.name = name
    this.email = email
    this.password = bcrypt.hashSync(password, 10)
    this.type = type
    this.elo = 1000
  }

  verifyPassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password)
  }
}
