import { gql } from '@apollo/client';

export const SIGNIN = gql`
mutation signin($username: String!, $password: String!) {
  authorize(credentials: { username: $username, password: $password }) {
    accessToken
  }
}
`;

// other queries...