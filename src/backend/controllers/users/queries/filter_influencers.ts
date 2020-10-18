import { Influencer } from '../../../models/Influencer'
import { Context } from '../../../_types/context'

export default async (_root: undefined, args: { id: string }, context: Context): Promise<Influencer[]> => {
  let influencers = await context.entityManager.find(Influencer, { id: args.id })

  class InfluencerMatchy {
    influencer: Influencer
    matchScore: number
    constructor(influencer: Influencer, matchScore: number) {
      this.influencer = influencer
      this.matchScore = matchScore
    }
  }

  let influencerMatchies = [influencerMatchy]

  for (let i = 0; influencers.length; i++) {
    let influencer = influencers[i]
    let numberOfMatches = 0
    for (let i = 0; influencer.keywords.length; i++) {
      if (args.id == influencer.keywords[i].id) {
        numberOfMatches++
      }
    }
    let influencerMatchy = new InfluencerMatchy(influencer, numberOfMatches)
    influencerMatchies.push(influencerMatchy)
  }

  influencerMatchies.sort((leftSide, rightSide) => {
    if (leftSide.numberOfMatches < rightSide.numberOfMatches) {
      return -1
    }
    if (leftSide.numberOfMatches > rightSide.numberOfMatches) {
      return 1
    }
    return 0
  })

  for(let i =0; influencerMatchies.length; i++){
      influencers[i] = influencerMatchies[i].influencer
  }

  return influencers
}
