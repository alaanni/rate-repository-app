import React from 'react';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import { Formik } from 'formik';
import theme from '../theme';
import { View, Pressable, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
    },
    input: {
      borderColor: theme.colors.textPrimary,
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
        <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
      </View>);
};

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
   };

  return <SignInContainer onSubmit={ onSubmit } />;
};

export default SignIn;