import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/routers';

import MainTabNavigator from './MainTabNavigator';
import { MAIN_TAB_NAVIGATOR, RESTAURANT_DETAIL } from './route.actions';
import RestaurantDetail from '@src/modules/home/screens/RestaurantDetail';

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase, 'MAIN_STACK_NAVIGATOR'>;
}

const MainStackNavigator: React.FC<Props> = (): JSX.Element => {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator initialRouteName={MAIN_TAB_NAVIGATOR} screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={MAIN_TAB_NAVIGATOR} component={MainTabNavigator} />
      <MainStack.Screen name={RESTAURANT_DETAIL} component={RestaurantDetail} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
