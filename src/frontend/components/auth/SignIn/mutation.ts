import gql from 'graphql-tag'

export default gql`
  mutation($email: String!, $password: String!) {
    userToken: login_user(email: $email, password: $password) {
      token
    }
  }
`
