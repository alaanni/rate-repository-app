import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';

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
  return <View style={styles.container}>
    <ScrollView horizontal>
      <Link to="/">
        <Text style={styles.appBarTitle}>Repositories</Text>
      </Link>
      <Link to="/signin">
        <Text style={styles.appBarTitle}>Sing in</Text>
      </Link>
    </ScrollView>
    
  </View>;
};

export default AppBar;