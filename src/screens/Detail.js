import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Detail extends Component {
  render() {
    return (
      <View style={detailStyle.parent}>
        <Text style={detailStyle.text}> Detail Screen </Text>
      </View>
    );
  }
}

const detailStyle = StyleSheet.create({
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
