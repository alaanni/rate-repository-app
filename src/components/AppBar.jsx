import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e'
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab title="Repositories" />
  </View>;
};

export default AppBar;