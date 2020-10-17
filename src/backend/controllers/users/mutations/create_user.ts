import { User } from '../../../models/User'
import { Context } from '../../../_types/context'
import { generateJWT } from '../../../_utils/jwt'

export default async (
  _root: undefined,
  args: { name: string; email: string; password: string },
  context: Context
): Promise<{ token: string; user: User }> => {
  const user = new User(args.name, args.email, args.password)
  await context.entityManager.persistAndFlush(user)
  return {
    token: generateJWT(user.id),
    user
  }
}
