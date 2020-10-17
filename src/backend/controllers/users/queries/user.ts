import { Context } from '../../../_types/context'
import { User } from '../../../models/User'

export default async (_root: undefined, args: { id: string }, context: Context): Promise<User> => {
  return await context.entityManager.findOne(User, { id: args.id })
}
