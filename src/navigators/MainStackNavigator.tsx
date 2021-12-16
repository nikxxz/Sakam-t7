import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Tabs from './Tabs';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
