import { User } from '../../../models/User'
import { Context } from '../../../_types/context'
import { generateJWT } from '../../../_utils/jwt'

export default async (
  _root: undefined,
  args: { email: string; },
  context: Context
): Promise<{ compUser: User }> => {
  // Requires the influrencer email
  const compUser: User = await context.entityManager.findOne(User, { id: context.currentUserId })
  const user: User = await context.entityManager.findOne(User, { name: args.email })
  compUser.staredUsers.add(user)
  await context.entityManager.persistAndFlush(compUser)
  return {
    compUser
  }
}
