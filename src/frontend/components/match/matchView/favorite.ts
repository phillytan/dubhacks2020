import gql from 'graphql-tag'

export default gql`
  mutation($influencerId: ID!) {
    add_to_favorite(influencerId: $influencerId) {
      test
    }
  }
`
