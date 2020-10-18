import gql from 'graphql-tag'

export default gql`
  query {
    keywords: keywords {
      id
      keyword
    }
  }
`
