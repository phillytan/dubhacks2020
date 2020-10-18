import { Collection, Entity, ManyToMany, OneToMany, Property } from '@mikro-orm/core'
import { BaseEntity } from './BaseEntity'
import { InfluencerRating } from './InfluencerRating'
import { Keyword } from './Keyword'

@Entity()
export class Influencer extends BaseEntity {
  @Property()
  name: string

  @Property()
  description: string

  @ManyToMany(() => Keyword, keyword => keyword.influencers, { owner: true })
  keywords = new Collection<Keyword>(this);

  @Property()
  url: string

  @OneToMany(() => InfluencerRating, ir => ir.influencer)
  influencerRatings = new Collection<InfluencerRating>(this);

  constructor(name: string, description: string, url: string) {
    super()
    this.name = name
    this.description = description
    this.url = url
  }
}
