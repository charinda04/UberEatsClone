import React, {Dispatch, SetStateAction} from 'react';
import {View, StyleSheet} from 'react-native';

import HeaderButton from './HeaderButton';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

interface Props {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const HeaderTabs: React.FC<Props> = props => (
  <View style={styles.container}>
    <HeaderButton
      text="Delivery"
      activeTab={props.activeTab}
      setActiveTab={props.setActiveTab}
    />
    <HeaderButton
      text="Pickup"
      activeTab={props.activeTab}
      setActiveTab={props.setActiveTab}
    />
  </View>
);

export default HeaderTabs;
