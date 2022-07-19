import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Orders: React.FC = () => (
  <View style={styles.container}>
    <Text>Orders</Text>
  </View>
);

export default Orders;
