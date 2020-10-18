import { Influencer } from '../../../models/Influencer'
import { InfluencerRating } from '../../../models/InfluencerRating'
import { Round } from '../../../models/Round'
import { Context } from '../../../_types/context'

export default async (_root: undefined, args: { keywordIds: string[] }, context: Context): Promise<Round> => {
  const influencers = await context.entityManager.find(Influencer, { keywords: args.keywordIds })
  influencers.sort((ia, ib) => {
    const iaKeywordIds = ia.keywords.toArray().map(x => x.id)
    const ia2 = iaKeywordIds.filter((obj) => { return args.keywordIds.indexOf(obj) !== -1 })
    const iaLength = ia2.length

    const ibKeywordIds = ib.keywords.toArray().map(x => x.id)
    const ib2 = ibKeywordIds.filter((obj) => { return args.keywordIds.indexOf(obj) !== -1 })
    const ibLength = ib2.length

    if (iaLength < ibLength) {
      return 1
    } else if (iaLength > ibLength) {
      return -1
    } else {
      return 0
    }
  })

  const filteredInfluencers = influencers.slice(0, 25)

  const round = new Round()

  filteredInfluencers.forEach(async (influencer) => {
    round.influencerRatings.add(new InfluencerRating(influencer))
  })

  await context.entityManager.persistAndFlush(round)

  return round
}
