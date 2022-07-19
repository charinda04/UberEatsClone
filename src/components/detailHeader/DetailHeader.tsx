import React from 'react';
import { View } from 'react-native';

import { RestaurantDetailRouteProp } from '@src/modules/home/screens/RestaurantDetail';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

interface Props {
  route: RestaurantDetailRouteProp;
}

export type NavParams = {
  name: string;
  image: string;
  categories: Array<string>;
  price: string;
  reviews: number;
  rating: number;
};

const DetailHeader: React.FC<Props> = props => {
  const navParams = props.route.params as NavParams | undefined;
  const { name, image, price, reviews, rating, categories } = navParams || {};

  const formattedCategories = categories && categories.map(cat => cat.title).join(' • ');

  const description = `${formattedCategories} ${price ? ' • ' + price : ''} • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

export default DetailHeader;
