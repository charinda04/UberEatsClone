import React, {Dispatch, SetStateAction} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '900',
  },
});

interface Props {
  text: string;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const HeaderButton: React.FC<Props> = props => (
  <TouchableOpacity
    style={[
      styles.buttonContainer,
      {backgroundColor: props.activeTab === props.text ? 'black' : 'white'},
    ]}
    onPress={() => props.setActiveTab(props.text)}>
    <Text
      style={[
        styles.textStyle,
        {color: props.activeTab === props.text ? 'white' : 'black'},
      ]}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

export default HeaderButton;
