import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  appBarTitle: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    fontSize: 20,
    padding: 25,
  }
});

const AppBarTab = ({ title }) => {
  return (
    <View>
        <Text style={styles.appBarTitle}>{title}</Text>
    </View>
  );
};

export default AppBarTab;