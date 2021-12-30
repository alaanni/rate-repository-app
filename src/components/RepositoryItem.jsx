import React from 'react';
import { View, StyleSheet} from 'react-native';
import ItemFooter from './ItemFooter';
import ItemHeader from './ItemHeader';

const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      backgroundColor: 'white'
    },
});

const RepositoryItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <ItemHeader item={item} />
        <ItemFooter item={item} />
      </View>
    );
};

export default RepositoryItem;