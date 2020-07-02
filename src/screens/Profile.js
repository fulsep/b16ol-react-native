import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={profileStyle.parent}>
        <Text style={profileStyle.text}> Profile Screen </Text>
      </View>
    );
  }
}

const profileStyle = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
