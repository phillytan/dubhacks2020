import { Collection, Entity, ManyToMany, OneToMany, Property } from '@mikro-orm/core'
import { BaseEntity } from './BaseEntity'
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
  media = new Collection<Keyword>(this);

  constructor(name: string) {
    super()
    this.name = name
  }
}
