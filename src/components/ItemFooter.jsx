import React from "react";
import { View, StyleSheet} from 'react-native';
import Text from "./Text";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexGrow: 1,
      justifyContent: 'space-around',
    },
});

const FooterNumbers = ({ header, number }) => {
    if (number >= 1000) {
        number = Math.round(number / 1000 * 10) / 10 + "k";
    }
    return (
      <View style={{ alignItems: 'center', paddingBottom: 10 }}>
        <Text fontWeight="bold">{number}</Text>
        <Text color="textSecondary" style={{ paddingTop: 5 }}>{header}</Text>
      </View>
    );
};

const ItemFooter = ({ item }) => {
    return (
      <View style={styles.container}>
        <FooterNumbers header='Stars' number={item.stargazersCount}/>
        <FooterNumbers header='Forks' number={item.forksCount}/>
        <FooterNumbers header='Reviews' number={item.reviewCount}/>
        <FooterNumbers header='Rating' number={item.ratingAverage}/>
      </View>
    );
};

export default ItemFooter;