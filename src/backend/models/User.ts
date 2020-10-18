import { Entity, Enum, ManyToMany, Property, Unique, Collection, OneToMany } from '@mikro-orm/core'
import { BaseEntity } from './BaseEntity'
import bcrypt from 'bcrypt'
import { Influencer } from './Influencer'

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

  @ManyToMany(() => User)
  matched = new Collection<User>(this)

  @ManyToMany(() => Influencer)
  starredInfluencers = new Collection<Influencer>(this)

  // When I mean user I actually mean the influencer
  constructor(name: string, email: string, password: string, type: UserType = UserType.COMPANY) {
    super()
    this.name = name
    this.email = email
    this.password = bcrypt.hashSync(password, 10)
    this.type = type
  }

  verifyPassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password)
  }
}
