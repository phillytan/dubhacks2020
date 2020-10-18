import { Entity, ManyToOne, Property, Unique } from '@mikro-orm/core'
import { BaseEntity } from './BaseEntity'
import { Influencer } from './Influencer'

@Entity()
export class Media extends BaseEntity {
  @Property()
  @Unique()
  filename: string

  @ManyToOne(() => Influencer)
  influencers: Influencer

  // When I mean user I actually mean the influencer
  constructor(filename: string) {
    super()
    this.filename = filename
  }
}
