import React from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';
import useSignIn from '../hooks/useSingIn';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    flexDirection: 'row'
  },
  appBarTitle: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    fontSize: 20,
    padding: 25,
  },
});

const AppBar = () => {
  const { authUser, signOut } = useSignIn();
  const history = useHistory();
  console.log('authUser: '+authUser);

  const handleSignOut = async () => {
    try {
      await signOut();
      history.push('/signin');
    } catch (error) {
      console.log(error);
    }
  };

  return <View style={styles.container}>
    <ScrollView horizontal>
      <Link to="/">
        <Text style={styles.appBarTitle}>Repositories</Text>
      </Link>
      {authUser == null ?
      <>
      <Link to="/signin">
        <Text style={styles.appBarTitle}>Sing in</Text>
      </Link>
      </>
      :
      <>
      <Pressable onPress={() => handleSignOut()}>
      <Text style={styles.appBarTitle}>Sign out</Text>
      </Pressable>
      </>
      }
    </ScrollView>
    
  </View>;
};

export default AppBar;