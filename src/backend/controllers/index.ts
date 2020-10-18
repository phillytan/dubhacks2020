import { gql } from 'apollo-server-express'
import users from './users'
import keywords from './keywords'
import influencers from './influencers'

const emptyDefs = gql`
  type Query
  type Mutation
`

export const resolvers = [users.resolvers, keywords.resolvers, influencers.resolvers]

export const typeDefs = [emptyDefs, users.typeDefs, keywords.typeDefs, influencers.typeDefs]
