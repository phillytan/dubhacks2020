import { Keyword } from '../../../models/Keyword'
import { Context } from '../../../_types/context'

export default async (
  _root: undefined,
  args: { keyword: string },
  context: Context
): Promise<Keyword> => {

  const keyword = args.keyword.trim().toLowerCase()

  const existingKeyword = await context.entityManager.findOne(Keyword, { keyword })

  if (existingKeyword) {
    return existingKeyword
  }

  const keywordObj = new Keyword(args.keyword)
  await context.entityManager.persistAndFlush(keywordObj)
  return keywordObj
}
