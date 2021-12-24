import {Transition0} from '../constants/animations';
import React from 'react';
import Player from '../screens/Player';
import PlayerStackScreen from './PlayerStack';
import Tabs from './Tabs';
import AuthScreen from '../screens/AuthScreen';
import SplashScreen from '../screens/SplashScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={Transition0}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Player"
        component={Player}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PlayerStack"
        component={PlayerStackScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
