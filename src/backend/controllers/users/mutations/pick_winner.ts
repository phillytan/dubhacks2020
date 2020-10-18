import { User } from '../../../models/User'
import { Context } from '../../../_types/context'
import { probability } from '../../util'

export default async (
  _root: undefined,
  args: { emailFirst: string; emailSecond: string; emailWinner: string },
  context: Context
): Promise<{ user: User }> => {
  const influOne: User = await context.entityManager.findOne(User, { email: args.emailFirst })
  const influTwo: User = await context.entityManager.findOne(User, { email: args.emailSecond })
  const valOne: number = probability(influTwo.elo, influOne.elo)
  const valTwo: number = probability(influOne.elo, influTwo.elo)
  const K = 30
  if (influOne.email === args.emailWinner) {
    influOne.elo = influOne.elo + K * (1 - valOne)
    influTwo.elo = influTwo.elo + K * (0 - valTwo)
    await context.entityManager.persistAndFlush([influOne, influTwo])
    return { user: influOne }
  }
  else {
    influOne.elo = influOne.elo + K * (0 - valOne)
    influTwo.elo = influTwo.elo + K * (1 - valTwo)
    await context.entityManager.persistAndFlush([influOne, influTwo])
    return { user: influTwo }
  }
}
