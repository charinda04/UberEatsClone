import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: 180,
  },
  iconWrapper: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
});

interface Props {
  image: string;
}

const RestaurantImage: React.FC<Props> = props => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={styles.imageStyle}
    />
    <TouchableOpacity style={styles.iconWrapper}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

export default RestaurantImage;
