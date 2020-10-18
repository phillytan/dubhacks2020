import { Collection, Entity, ManyToMany, OneToMany, Property } from '@mikro-orm/core'
import { BaseEntity } from './BaseEntity'
import { InfluencerRating } from './InfluencerRating'
import { Keyword } from './Keyword'
import { Media } from './Media'

@Entity()
export class Influencer extends BaseEntity {
  @Property()
  name: string

  @Property()
  description: string

  @ManyToMany(() => Keyword, keyword => keyword.influencers, { owner: true })
  keywords = new Collection<Keyword>(this);

  @OneToMany(() => Media, media => media.influencers)
  media = new Collection<Media>(this);

  @OneToMany(() => InfluencerRating, ir => ir.influencer)
  influencerRatings = new Collection<InfluencerRating>(this);

  constructor(name: string) {
    super()
    this.name = name
  }
}
