import { useMutation } from '@apollo/client';
import { SIGNIN } from '../graphql/mutations';

const useSignIn = () => {
    const [mutate, result] = useMutation(SIGNIN);
  
    const signIn = async ({ username, password }) => {
      // call the mutate function here with the right arguments
      const response = await mutate({ variables: { username, password } });

      return response;
    };
  
    return [signIn, result];
};

export default useSignIn;