import { Influencer } from '../../models/Influencer'
import { Keyword } from '../../models/Keyword'
import { Context } from '../../_types/context'

export default {
  Influencer: {
    keywords: async (
      influencer: Influencer,
      _args: undefined,
      context: Context
    ): Promise<Keyword[]> => {
      return await influencer.keywords.loadItems()
    }
  }
}
