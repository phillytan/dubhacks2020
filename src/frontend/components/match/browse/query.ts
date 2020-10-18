import gql from 'graphql-tag'

export default gql`
  query {
    stared_influencers: users {
      id
      name
      email
    }
  }
`
