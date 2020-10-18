import { Entity, Enum, ManyToMany, Property, Unique, Collection, OneToMany, ManyToOne, OneToOne } from '@mikro-orm/core'
import { BaseEntity } from './BaseEntity'
import { Influencer } from './Influencer'
import { Round } from './Round'
import { User } from './User'

export enum UserType {
  COMPANY = 'company',
  INFLUENCER = 'influencer'
}

@Entity()
export class InfluencerRating extends BaseEntity {

  @ManyToOne(() => Round)
  round!: Round;

  @ManyToOne(() => Influencer)
  influencer!: Influencer;

  @Property()
  elo: number

  @ManyToMany(() => User, u => u.starredInfluencers)
  favoritedBy = new Collection<User>(this)

  constructor(influencer: Influencer, elo = 100) {
    super()
    this.influencer = influencer
    this.elo = elo
  }

  lost(): void {
    this.elo-=1
  }

  won(): void {
    this.elo+=1
  }

}
