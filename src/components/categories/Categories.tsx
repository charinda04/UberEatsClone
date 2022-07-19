import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const items = [
  {
    image: require('@assets/images/bbq.png'),
    text: 'Bbq',
  },
  {
    image: require('@assets/images/ice-cream.jpg'),
    text: 'Ice Cream',
  },
  {
    image: require('@assets/images/pizza.png'),
    text: 'Pizza',
  },
  {
    image: require('@assets/images/sandwich.jpg'),
    text: 'Sandwich',
  },
  // {
  //   image: require('@assets/images/deals.png'),
  //   text: 'Deals',
  // },
  // {
  //   image: require('@assets/images/coffee.png'),
  //   text: 'Coffee & Tea',
  // },
  // {
  //   image: require('@assets/images/desserts.png'),
  //   text: 'Desserts',
  // },
];

const Categories: React.FC = () => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingLeft: 20,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{alignItems: 'center', marginRight: 30}}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: 'contain',
              }}
            />
            <Text style={{fontSize: 13, fontWeight: '900'}}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
