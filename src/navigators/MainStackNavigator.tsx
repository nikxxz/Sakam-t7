import {createStackNavigator} from '@react-navigation/stack';
import {Transition0} from '../constants/animations';
import React from 'react';
import Player from '../screens/Player';
import PlayerStackScreen from './PlayerStack';
import Tabs from './Tabs';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={Transition0}>
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
