import { ForbiddenError } from 'apollo-server-express'
import { Round } from '../../../models/Round'
import { Context } from '../../../_types/context'

export default async (_root: undefined, args: { roundId: string }, context: Context): Promise<any> => {
  const round = await context.entityManager.findOne(Round, args.roundId)
  await round.influencerRatings.init()
  const length = round.influencerRatings.length
  if (round.matches > 25 || (length < 5 && Math.pow(2,length - 1) <= round.matches)) {
    throw new ForbiddenError('Matches exhausted. Please view your results instead.')
  }
  const ir = await round.influencerRatings.loadItems()
  const ir2 = ir.filter(x => x.elo >= 97)

  if (ir2.length < 2) {
    throw new ForbiddenError('Unable to find influencers')
  }

  const item1 = Math.floor(Math.random()*ir2.length)
  let item2 = Math.floor(Math.random()*ir2.length)

  while (item2 === item1) {
    item2 = Math.floor(Math.random()*ir2.length)
  }

  return {
    influencerOne: ir2[item1].influencer,
    influencerTwo: ir2[item2].influencer
  }
}
