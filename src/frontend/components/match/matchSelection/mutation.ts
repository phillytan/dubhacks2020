import gql from 'graphql-tag'

export default gql`
  mutation($keywordIds: [ID]!) {
    round: start_match(keywordIds: $keywordIds) {
      id
    }
  }
`
