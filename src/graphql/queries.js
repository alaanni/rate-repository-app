import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
        edges {
            node {
                id
                fullName
                description
                language
                stargazersCount
                forksCount
                reviewCount
                ratingAverage
                ownerAvatarUrl
            }
          }
    }
  }
`;

export const GET_AUTHORIZED = gql`
query getAuthorizedUser {
  authorizedUser {
    id
    username
  }
}
`;