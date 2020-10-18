import { Entity, Collection, OneToMany, Property } from '@mikro-orm/core'
import { BaseEntity } from './BaseEntity'
import { InfluencerRating } from './InfluencerRating'

@Entity()
export class Round extends BaseEntity {

  @OneToMany(() => InfluencerRating, ir => ir.round)
  influencerRatings = new Collection<InfluencerRating>(this);

  @Property()
  matches: number

  constructor() {
    super()
    this.matches = 0
  }

}
