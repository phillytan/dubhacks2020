import { User } from '../../../models/User'
import { Context } from '../../../_types/context'

export default async (_root: undefined, _args: {}, context: Context): Promise<User[]> => {
  return context.entityManager.find(User, {})
}
