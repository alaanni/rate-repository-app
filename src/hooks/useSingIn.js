import { useApolloClient, useMutation } from '@apollo/client';
import { SIGNIN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const [mutate, result] = useMutation(SIGNIN);
    const apolloClient = useApolloClient();
  
    const signIn = async ({ username, password }) => {
      // call the mutate function here with the right arguments
      const result = await mutate({ variables: { username, password } });

      await authStorage.setAccessToken(result.data.authorize.accessToken);
      apolloClient.resetStore();

      return result;
    };
  
    return [signIn, result];
};

export default useSignIn;