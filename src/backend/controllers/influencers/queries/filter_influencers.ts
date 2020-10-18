import { Influencer } from '../../../models/Influencer'
import { Context } from '../../../_types/context'

export default async (_root: undefined, args: { keywordIds: string[] }, context: Context): Promise<Influencer[]> => {
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
  return influencers
}
