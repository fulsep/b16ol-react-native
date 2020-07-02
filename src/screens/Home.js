import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={homeStyle.parent}>
        <Text style={homeStyle.text}> Home Screen </Text>
        <Button
          title="Go to Detail"
          onPress={() => this.props.navigation.navigate('detail')}
        />
      </View>
    );
  }
}

const homeStyle = StyleSheet.create({
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
