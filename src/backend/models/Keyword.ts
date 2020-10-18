import { Collection, Entity, ManyToMany, Property, Unique } from '@mikro-orm/core'
import { BaseEntity } from './BaseEntity'
import { Influencer } from './Influencer'

@Entity()
export class Keyword extends BaseEntity {
  @Property()
  @Unique()
  keyword: string

  @ManyToMany(() => Influencer, influencer => influencer.keywords)
  influencers = new Collection<Influencer>(this)

  // When I mean user I actually mean the influencer
  constructor(keyword: string) {
    super()
    this.keyword = keyword.trim().toLowerCase()
  }
}
