import gql from 'graphql-tag'

export default gql`
  mutation($roundId: ID!, $winning: ID!, $losing: ID!) {
    round: score_match(roundId: $roundId, winning: $winning, losing: $losing) {
      test
    }
  }
`
