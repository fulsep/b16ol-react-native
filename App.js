import React, {Component} from 'react';
// import {View, Text, StyleSheet, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/Home';
import ProfileScreen from './src/screens/Profile';
import DetailScreen from './src/screens/Detail';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

class Tab extends Component {
  render() {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen
          options={{
            title: 'Dashboard',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
          component={HomeScreen}
          name="home"
        />
        <BottomTab.Screen
          options={{
            title: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Icon name="user" solid color={color} size={size} />
            ),
          }}
          component={ProfileScreen}
          name="profile"
        />
      </BottomTab.Navigator>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  login = () => {
    this.setState({isLogin: true});
  };
  render() {
    const {isLogin} = this.state;
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {!isLogin && (
            <>
              <Stack.Screen
                component={props => (
                  <LoginScreen {...props} login={this.login} />
                )}
                options={{
                  headerShown: false,
                }}
                name={'login'}
              />
            </>
          )}
          {isLogin && (
            <>
              <Stack.Screen
                options={{title: 'DemoApp'}}
                component={Tab}
                name={'main'}
              />
              <Stack.Screen
                options={{title: 'Detail'}}
                component={DetailScreen}
                name={'detail'}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
