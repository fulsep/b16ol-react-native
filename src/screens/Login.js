import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

import bg from '../assets/image/bg.jpeg';

export default class Login extends Component {
  render() {
    return (
      <View>
        <View style={[loginStyle.fill, loginStyle.bgWrapper]}>
          <Image style={loginStyle.bg} source={bg} />
        </View>
        {/* <View style={loginStyle.bgOverlay} /> */}
        <View style={loginStyle.accent1}>
          <View style={loginStyle.logo}>
            <Text style={loginStyle.logoItem}>R</Text>
          </View>
          <View style={loginStyle.brand}>
            <View style={loginStyle.brandWrapper}>
              <Text style={loginStyle.brandText}>Rel</Text>
              <View style={loginStyle.right}>
                <Text style={[loginStyle.brandText]}>Ate</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const accentHeight = 250;

const loginStyle = StyleSheet.create({
  fill: {
    flex: 1,
  },
  right: {
    alignItems: 'flex-end',
  },
  accent1: {
    backgroundColor: '#68896C',
    height: accentHeight,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 50,
    width: '100%',
    zIndex: 2,
  },
  bgOverlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
  },
  bg: {
    height: deviceHeight,
    width: deviceWidth,
  },
  logo: {
    alignItems: 'flex-end',
  },
  logoItem: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#EBEFDE',
  },
  brand: {
    position: 'relative',
  },
  brandWrapper: {
    // backgroundColor: 'black',
    width: 200,
    position: 'absolute',
    zIndex: 99,
  },
  brandText: {
    fontSize: 60,
    color: '#EBEFDE',
    textTransform: 'uppercase',
  },
});
