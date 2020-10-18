import { Influencer } from '../../models/Influencer'
import { Keyword } from '../../models/Keyword'
import { Round } from '../../models/Round'
import { Context } from '../../_types/context'

export default {
  Influencer: {
    keywords: async (
      influencer: Influencer
    ): Promise<Keyword[]> => {
      return await influencer.keywords.loadItems()
    }
  },
  Round: {
    influencers: async (
      round: Round
    ): Promise<Influencer[]> => {
      const ir = await round.influencerRatings.loadItems()
      return ir.map(x => {
        return x.influencer
      })
    }
  },
  Match: {
    influencerOne: async (
      match: any,
      _args: unknown,
      context: Context
    ): Promise<Influencer> => {
      return await context.entityManager.findOne(Influencer, { id: match?.influencerOne?._id })
    },
    influencerTwo: async (
      match: any,
      _args: unknown,
      context: Context
    ): Promise<Influencer> => {
      return await context.entityManager.findOne(Influencer, { id: match?.influencerTwo?._id })
    }
  }
}
