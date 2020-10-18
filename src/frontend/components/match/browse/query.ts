import gql from 'graphql-tag'

export default gql`
  query {
    starred_influencers {
      id
      name
      description
      url
      keywords {
        keyword
      }
    }
  }
`
