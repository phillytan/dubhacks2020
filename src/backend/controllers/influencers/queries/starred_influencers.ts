import { Influencer } from '../../../models/Influencer'
import { User } from '../../../models/User'
import { Context } from '../../../_types/context'

export default async (_root: undefined, _args: {}, context: Context): Promise<Influencer[]> => {
  const currComp: User = await context.entityManager.findOne(User, { id: context.currentUserId })
  return await currComp.starredInfluencers.loadItems()
}
