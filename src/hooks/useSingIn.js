import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { SIGNIN } from '../graphql/mutations';
import { GET_AUTHORIZED } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const [ auth, result ] = useMutation(SIGNIN);
    const { data, loading } = useQuery(GET_AUTHORIZED, {
        fetchPolicy: 'cache-and-network'
        });
  
    const signIn = async ({ username, password }) => {
      // call the mutate function here with the right arguments
      const result = await auth({ variables: { username, password } });

      await authStorage.setAccessToken(result.data.authorize.accessToken);
      apolloClient.resetStore();

      return result;
    };

    const signOut = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
    };
  
    return { signIn, signOut, authUser: data?.authorizedUser, loading, result };
};

export default useSignIn;