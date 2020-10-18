import gql from 'graphql-tag'

export default gql`
  query($roundId: ID!) {
  next_influencers(roundId: $roundId) {
    influencerOne {
      id
      name
      description
      url
      keywords {
        keyword
      }
    }
    influencerTwo {
      id
      name
      description
      url
      keywords {
        keyword
      }
    }
  }
}
`
