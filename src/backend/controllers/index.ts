import { gql } from 'apollo-server-express'
import users from './users'
import keywords from './keywords'

const emptyDefs = gql`
  type Query
  type Mutation
`

export const resolvers = [users.resolvers, keywords.resolvers]

export const typeDefs = [emptyDefs, users.typeDefs, keywords.typeDefs]
