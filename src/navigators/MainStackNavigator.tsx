import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Player from '../screens/Player';
import PlayerStackScreen from './PlayerStack';
import Tabs from './Tabs';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Player" component={Player} />
      <Stack.Screen name="PlayerStack" component={PlayerStackScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
