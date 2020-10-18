import { Influencer } from '../../../models/Influencer'
import { User } from '../../../models/User'
import { Context } from '../../../_types/context'
import { generateJWT } from '../../../_utils/jwt'

export default async (
  _root: undefined,
  args: { influencerId: string; },
  context: Context
): Promise<any> => {
  // Requires the influrencer email
  const currentUser = await context.entityManager.findOne(User, { id: context.currentUserId })
  const influencer = await context.entityManager.findOne(Influencer, { id: args.influencerId })
  currentUser.starredInfluencers.add(influencer)
  await context.entityManager.persistAndFlush(currentUser)
  return {
    test: 'ok'
  }
}
