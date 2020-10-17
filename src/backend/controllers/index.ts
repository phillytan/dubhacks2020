import { gql } from 'apollo-server-express'
import users from './users'

const emptyDefs = gql`
  type Query
  type Mutation
`

export const resolvers = [users.resolvers]

export const typeDefs = [emptyDefs, users.typeDefs]
