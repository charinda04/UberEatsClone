import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  nameText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 13,
    color: 'gray',
  },
  ratingWrapper: {
    backgroundColor: '#eee',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

interface Props {
  name: string;
  rating: number;
}

const RestaurantInfo: React.FC<Props> = props => (
  <View style={styles.infoContainer}>
    <View>
      <Text style={styles.nameText}>{props.name}</Text>
      <Text style={styles.timeText}>30-45 • min</Text>
    </View>
    <View style={styles.ratingWrapper}>
      <Text>{props.rating}</Text>
    </View>
  </View>
);

export default RestaurantInfo;
