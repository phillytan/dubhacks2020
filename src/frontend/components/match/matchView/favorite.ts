import gql from 'graphql-tag'

export default gql`
  favorite {
    add_to_favorite: user {
      id
      name
    }
  }
`
