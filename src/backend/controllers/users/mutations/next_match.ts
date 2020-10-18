import { User } from '../../../models/User'
import { Context } from '../../../_types/context'

export default async (_root: undefined, _args: {}, context: Context): Promise<User[]> => {
  const company: User = await context.entityManager.findOne(User, { id: context.currentUserId })
  const influencers: User[] = await context.entityManager.find(User, { type: 'influencer' })
  const list: User[] = []
  for (const influencer of influencers) {
    if (!company.matched.contains(influencer)) {
      list.push(influencer)
    }
  }
  const res: User[] = []
  // Picks a random influencer to match against
  if (list.length >= 2) {
    res.push(list[0])
    const val = Math.floor(Math.random() * (list.length - 2) + 1)
    res.push(list[val])
    company.matched.add(list[0])
    company.matched.add(list[val])
    await context.entityManager.persistAndFlush(company)
  }
  return res
}
