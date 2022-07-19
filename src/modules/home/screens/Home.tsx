import HeaderTabs from '@src/components/headerTabs/HeaderTabs';
import React, {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Delivery');

  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* <SearchBar cityHandler={setCity} /> */}
      </View>
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs /> */}
    </SafeAreaView>
  );
};

export default Home;
