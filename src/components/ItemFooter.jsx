import React from "react";
import { View, StyleSheet} from 'react-native';
import Text from "./Text";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexGrow: 1,
      justifyContent: 'space-around',
    },
    actionTouchable: {
      flexGrow: 0,
    },
    actionText: {
      textDecorationLine: 'underline',
    },
  });

  const ItemFooter = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text>Stars: {item.stargazersCount}</Text>
        <Text>Forks: {item.forksCount}</Text>
        <Text>Reviews: {item.reviewCount}</Text>
        <Text>Rating: {item.ratingAverage}</Text>
      </View>
    );
  };

  export default ItemFooter;