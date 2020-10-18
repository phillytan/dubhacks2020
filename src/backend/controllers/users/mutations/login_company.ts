import { Company } from '../../../models/Company'
import { Context } from '../../../_types/context'
import { generateJWT } from '../../../_utils/jwt'

export default async (
  _root: undefined,
  args: { name: string; email: string; password: string },
  context: Context
): Promise<{ token: string; company: Company }> => {
  const company = new Company(args.name, args.email, args.password)
  await context.entityManager.persistAndFlush(company)
  return {
    token: generateJWT(company.id),
    company
  }
}
