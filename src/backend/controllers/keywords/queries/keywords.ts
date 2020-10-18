import { Keyword } from '../../../models/Keyword'
import { Context } from '../../../_types/context'

export default async (_root: undefined, _args: {}, context: Context): Promise<Keyword[]> => {
  return context.entityManager.find(Keyword, {}, {
    orderBy: {
      keyword: 'ASC'
    }
  })
}
