import { User } from '../../../models/User'
import { Context } from '../../../_types/context'

export default async (_root: undefined, _args: {}, context: Context): Promise<User[]> => {
  const currComp: User = await context.entityManager.findOne(User, { id: context.currentUserId })
  const influencers: User[] = await context.entityManager.find(User, { type: 'influencers' })
  const arr: User[] = []
  console.log(influencers)
  for (const influencer of influencers) {
    if (currComp.staredUsers.contains(influencer)) {
      arr.push(influencer)
    }
  }
  return arr
}
