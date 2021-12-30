import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 5,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
    flexShrink: 1
  },
  languageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    padding: 5
  },
  languageText: {
    color: 'white'
  },
  headingText: {
      fontWeight: theme.fontWeights.bold,
      marginBottom: 5,
      fontSize: theme.fontSizes.subheading
  }

});

const ItemHeader = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
            style={styles.avatar}
            source={{
            uri: item.ownerAvatarUrl
            }}
        />
      </View>
      <View style={styles.infoContainer}>
      <Text style={styles.headingText}>{item.fullName}</Text>
        <Text style= {{ color: '#444', fontSize: theme.fontSizes.subheading, flexDirection: 'column' }}>{item.description}</Text>
      <View style={styles.languageContainer}>
        <Text style={styles.languageText}>{item.language}</Text>
      </View>
      </View>
    </View>
  );
};

export default ItemHeader;