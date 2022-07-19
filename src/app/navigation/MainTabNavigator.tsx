import React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet } from 'react-native';

import Home from '@src/modules/home/screens/Home';
import Account from '@src/modules/account/screens/Account';
import Browse from '@src/modules/browse/screens/Browse';
import Grocery from '@src/modules/grocery/screens/Grocery';
import Orders from '@src/modules/orders/screens/Orders';
import StringData from '@src/shared/strings';

import { ACCOUNT, BROWSE, GROCERY, HOME, ORDERS } from './route.actions';

const styles = StyleSheet.create({
  tabIconStyles: {
    marginBottom: 3,
    alignSelf: 'center',
  },
});

const tabBarOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarAllowFontScaling: false,
  // tabBarLabelStyle: styles.labelStyles,
  // tabBarActiveTintColor: colors.colorPalette.black,
  // tabBarStyle: styles.generalStyles,
  tabBarLabelPosition: 'below-icon',
};

const MainTabNavigator: React.FC = () => {
  const { mainTabs } = StringData;
  const TabStack = createBottomTabNavigator();

  return (
    <TabStack.Navigator screenOptions={tabBarOptions}>
      <TabStack.Screen
        name={HOME}
        component={Home}
        options={{
          tabBarLabel: mainTabs.Home,
          tabBarIcon: () => <FontAwesome5 name="home" size={20} style={styles.tabIconStyles} />,
        }}
      />
      <TabStack.Screen
        name={BROWSE}
        component={Browse}
        options={{
          tabBarLabel: mainTabs.Browse,
          tabBarIcon: () => <FontAwesome5 name="search" size={20} style={styles.tabIconStyles} />,
        }}
      />
      <TabStack.Screen
        name={GROCERY}
        component={Grocery}
        options={{
          tabBarLabel: mainTabs.Grocery,
          tabBarIcon: () => <FontAwesome5 name="shopping-bag" size={20} style={styles.tabIconStyles} />,
        }}
      />
      <TabStack.Screen
        name={ORDERS}
        component={Orders}
        options={{
          tabBarLabel: mainTabs.Orders,
          tabBarIcon: () => <FontAwesome5 name="receipt" size={20} style={styles.tabIconStyles} />,
        }}
      />
      <TabStack.Screen
        name={ACCOUNT}
        component={Account}
        options={{
          tabBarLabel: mainTabs.Account,
          tabBarIcon: () => <FontAwesome5 name="user" size={20} style={styles.tabIconStyles} />,
        }}
      />
    </TabStack.Navigator>
  );
};

export default MainTabNavigator;
