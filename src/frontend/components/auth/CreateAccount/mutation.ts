import gql from 'graphql-tag'

export default gql`
  mutation($name: String!, $email: String!, $password: String!) {
    userToken: create_user(name: $name, email: $email, password: $password) {
      token
    }
  }
`
