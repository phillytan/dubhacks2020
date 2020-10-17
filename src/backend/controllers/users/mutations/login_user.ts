import { User } from '../../../models/User'
import { Context } from '../../../_types/context'
import { AuthenticationError } from 'apollo-server-express'
import { generateJWT } from '../../../_utils/jwt'

export default async (
  _root: undefined,
  args: { email: string; password: string },
  context: Context
): Promise<{ token: string; user: User }> => {
  const user = await context.entityManager.findOne(User, { email: args.email })
  if (!user || !user.verifyPassword(args.password)) {
    throw new AuthenticationError('Invalid Credentials')
  } else {
    return {
      token: generateJWT(user.id),
      user
    }
  }
}
