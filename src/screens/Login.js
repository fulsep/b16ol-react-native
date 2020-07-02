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
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('screen').height - StatusBar.currentHeight;

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
              onPress={this.props.login}
              style={loginStyle.submit}>
              <Icon name={'caret-right'} color={'#FFF'} size={40} />
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

const accentHeight = 280;

const loginStyle = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'relative',
  },
  accent1: {
    position: 'absolute',
    flex: 1,
    zIndex: 0,
    resizeMode: 'cover',
    width: '100%',
    height: deviceHeight,
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
    position: 'relative',
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
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },
  link: {
    marginTop: 50,
    marginBottom: 90,
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
    fontWeight: 'bold',
    color: '#1E2C1D',
  },
  submit: {
    position: 'absolute',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -40,
    right: -20,
    backgroundColor: '#1E2C1D',
  },
  submitText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
