import { Context } from '../../../_types/context'
import { User } from '../../../models/User'

export default async (_root: undefined, _args: {}, context: Context): Promise<User> => {
  return await context.entityManager.findOne(User, { id: context.currentUserId })
}


