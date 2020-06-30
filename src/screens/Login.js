import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

import bg from '../assets/image/bg.jpeg';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior={'position'} style={loginStyle.parent}>
        <Image source={bg} style={loginStyle.accent1} />
        <View style={loginStyle.accentOverlay} />
        <View style={loginStyle.accent2}>
          <View style={loginStyle.logo}>
            <Text style={loginStyle.logoText}>R</Text>
          </View>
          <View style={loginStyle.brand}>
            <View style={loginStyle.brandWrapper}>
              <View style={loginStyle.brandTextWrapper}>
                <Text style={loginStyle.brandText}>Rel</Text>
              </View>
              <View style={loginStyle.brandTextWrapperRight}>
                <Text style={loginStyle.brandText}>Ate</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={loginStyle.form}>
          <View style={loginStyle.formCard}>
            <View style={loginStyle.inputWrapper}>
              <Text style={loginStyle.inputLabel}>Username</Text>
              <TextInput
                // placeholder={'Your Username'}
                style={loginStyle.input}
              />
            </View>
            <View style={loginStyle.inputWrapper}>
              <Text style={loginStyle.inputLabel}>Password</Text>
              <TextInput
                // placeholder={'Your Password'}
                style={loginStyle.input}
              />
            </View>
            <TouchableOpacity
              onPress={() => Alert.alert('Logging In...')}
              style={loginStyle.submit}>
              <Text style={loginStyle.submitText}>&gt;</Text>
            </TouchableOpacity>
          </View>
          <View style={loginStyle.link}>
            <Text style={loginStyle.createAccount}>New Account</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const accentHeight = 250;

const loginStyle = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'relative',
  },
  accent1: {
    position: 'absolute',
    width: deviceWidth,
    height: deviceHeight,
    zIndex: 0,
  },
  accentOverlay: {
    position: 'absolute',
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  accent2: {
    height: accentHeight,
    width: deviceWidth,
    position: 'absolute',
    // backgroundColor: '#62725A',
    backgroundColor: '#1E2C1D',
    zIndex: 2,
    padding: 50,
  },
  logo: {
    alignItems: 'flex-end',
  },
  logoText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#FFF',
  },
  brand: {
    width: 220,
  },
  brandTextWrapperRight: {
    alignItems: 'flex-end',
  },
  brandText: {
    fontSize: 60,
    letterSpacing: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#FFF',
  },
  form: {
    position: 'absolute',
    zIndex: 4,
    width: deviceWidth,
    height: deviceHeight,
    justifyContent: 'flex-end',
  },
  formCard: {
    position: 'relative',
    width: deviceWidth - 70,
    height: 200,
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingTop: 50,
    paddingBottom: 50,
  },
  link: {
    marginTop: 50,
    marginBottom: 70,
    paddingRight: 30,
    paddingLeft: 30,
    alignItems: 'baseline',
  },
  createAccount: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
  inputWrapper: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  inputLabel: {
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
  submit: {
    position: 'absolute',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -20,
    right: -20,
    backgroundColor: '#1E2C1D',
  },
  submitText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
