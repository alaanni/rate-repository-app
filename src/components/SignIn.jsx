import React from 'react';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import { Formik } from 'formik';
import theme from '../theme';
import { View, Pressable, StyleSheet} from 'react-native';
import * as yup from 'yup';
import useSignIn from '../hooks/useSingIn';
import { useHistory } from 'react-router-native';


const validationSchema = yup.object().shape({
  username: yup
    .string().required('Username is required'),
  password: yup
    .string().required('Password is required'),
});


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
    },
    input: {
      borderWidth: 1,
      borderRadius: 3,
      margin: 10,
      height: 50,
      padding: 10
    },
    button: {
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
      flexGrow: 1,
      padding: 15,
      borderRadius: 3,
      height: 50,
    },
});

const SignInForm = ({ onSubmit }) => {
    return (
        <View>
          <FormikTextInput name="username" placeholder="Username" style={styles.input} />
          <FormikTextInput name="password" placeholder="Password" style={styles.input} secureTextEntry />
          <Pressable onPress={onSubmit} style={styles.button}>
            <Text style={{ fontWeight: 'bold', color: 'white'}}>Sign in</Text>
          </Pressable>
        </View>
      );
};

const SignInContainer = ({ onSubmit }) => {
    return (
      <View style={styles.container}>
        <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
      </View>);
};

const SignIn = () => {
  const { signIn } = useSignIn();
  const history = useHistory();

    const onSubmit = async (values) => {
        console.log(values);
        const { username, password } = values;

        try {
          const { data } = await signIn({ username, password });
          console.log(data);
          history.push("/");

        } catch (e) {
          console.log(e);
        }
   };

  return <SignInContainer onSubmit={ onSubmit }/>;
};

export default SignIn;