import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { HomeNavigationProp } from '@src/modules/home/screens/Home';

import RestaurantImage from './RestaurantImage';
import RestaurantInfo from './RestaurantInfo';
import { RESTAURANT_DETAIL } from '@src/app/navigation/route.actions';

const styles = StyleSheet.create({
  restaurantContainer: {
    marginTop: 10,
    padding: 15,
    backgroundColor: 'white',
  },
  restaurantWrapper: {
    marginBottom: 30,
  },
});

interface Restaurant {
  name: string;
  image_url: string;
  categories: Array<string>;
  price: string;
  reviews: number;
  rating: number;
}

interface Props {
  restaurantData: Array<Restaurant>;
  navigation: HomeNavigationProp;
}

const RestaurantItems: React.FC<Props> = props => {
  const { navigation } = props;

  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={styles.restaurantWrapper}
          onPress={() =>
            navigation.navigate(RESTAURANT_DETAIL, {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.reviews,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }>
          <View style={styles.restaurantContainer}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default RestaurantItems;
