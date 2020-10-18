import { InfluencerRating } from '../../../models/InfluencerRating'
import { Round } from '../../../models/Round'
import { Context } from '../../../_types/context'

export default async (_root: undefined, args: { roundId: string; winning: string; losing: string }, context: Context): Promise<any> => {
  const winner = await context.entityManager.findOne(InfluencerRating, {
    round: args.roundId,
    influencer: args.winning
  })

  winner.won()

  const loser = await context.entityManager.findOne(InfluencerRating, {
    round: args.roundId,
    influencer: args.losing
  })

  loser.lost()

  const round = await context.entityManager.findOne(Round, {
    id: args.roundId
  })

  round.matches++

  await context.entityManager.persistAndFlush([
    winner,
    loser,
    round
  ])

  return {
    test: 'ok'
  }
}
